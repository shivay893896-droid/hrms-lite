from typing import List, Literal
from pydantic import field_validator, Field
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """Production-ready configuration with security-first defaults"""
    
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=True,
        extra="ignore"
    )
    
    # Project settings
    PROJECT_NAME: str = "HRMS Lite API"
    VERSION: str = "1.0.0"
    API_V1_PREFIX: str = "/api/v1"
    
    # Environment configuration
    ENVIRONMENT: Literal["development", "staging", "production"] = "development"
    DEBUG: bool = Field(default=False, description="Enable debug mode and detailed errors")
    
    # Security settings
    SECRET_KEY: str = Field(
        default="dev-secret-key-change-in-production-32-chars-min",
        description="JWT secret key - MUST be set in production",
        min_length=32
    )
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = Field(
        default=30,
        ge=1,
        le=1440,
        description="Access token expiration time in minutes (1-1440)"
    )
    
    # Database settings
    MONGODB_URL: str = Field(
        default="mongodb+srv://shivay:Ninza%40300@cluster0.w1dpsqe.mongodb.net/hrms_lite?retryWrites=true&w=majority",
        description="MongoDB connection string"
    )

    MONGODB_DB_NAME: str = "hrms_lite"

    MONGODB_MAX_CONNECTIONS: int = Field(
        default=10,
        ge=1,
        le=100,
        description="Maximum MongoDB connection pool size"
    )

    MONGODB_MIN_CONNECTIONS: int = Field(
        default=1,
        ge=1,
        description="Minimum MongoDB connection pool size"
    )
    
    @field_validator("MONGODB_MAX_CONNECTIONS")
    @classmethod
    def validate_connection_pool(cls, v, info):
        min_conn = info.data.get("MONGODB_MIN_CONNECTIONS", 1)
        if v < min_conn:
            raise ValueError(
                f"MONGODB_MAX_CONNECTIONS ({v}) must be >= MONGODB_MIN_CONNECTIONS ({min_conn})"
            )
        return v
    
    # Server settings
    HOST: str = Field(
        default="0.0.0.0",
        description="Server host address"
    )

    PORT: int = Field(
        default=8000,
        ge=1,
        le=65535,
        description="Server port number (1-65535)"
    )
    
    @property
    def RELOAD(self) -> bool:
        return self.DEBUG
    
    # CORS settings
    ALLOWED_ORIGINS: List[str] = Field(
        default=["http://localhost:5173", "http://localhost:3000","http://localhost:3000",
    "https://hrms-lite-phi-two.vercel.app",],
        description="CORS allowed origins"
    )

    ALLOWED_METHODS: List[str] = ["GET", "POST", "PUT", "DELETE", "PATCH"]

    ALLOWED_HEADERS: List[str] = [
        "Content-Type",
        "Authorization",
        "X-Requested-With",
        "X-Request-ID"
    ]
    
    # Logging
    LOG_LEVEL: Literal["DEBUG", "INFO", "WARNING", "ERROR", "CRITICAL"] = "INFO"
    
    @field_validator("ENVIRONMENT", mode="before")
    @classmethod
    def validate_environment(cls, v):
        env = str(v).lower()
        if env == "production":
            return "production"
        elif env in ["staging", "stage"]:
            return "staging"
        return "development"
    
    @field_validator("DEBUG", mode="before")
    @classmethod
    def set_debug_from_env(cls, v, info):
        if v is not None:
            return bool(v)
        env = info.data.get("ENVIRONMENT", "development")
        return env != "production"
    
    @field_validator("SECRET_KEY", mode="before")
    @classmethod
    def validate_secret_key(cls, v, info):
        env = info.data.get("ENVIRONMENT", "development")
        default_key = "dev-secret-key-change-in-production-32-chars-min"

        if not v:
            v = default_key

        if len(v) < 32:
            raise ValueError("SECRET_KEY must be at least 32 characters long")

        if env == "production" and (
            v == default_key or v == "your-secret-key-here-change-in-production"
        ):
            raise ValueError(
                "SECRET_KEY must be set to a secure, unique value in production."
            )

        return v
    
    @field_validator("ALLOWED_ORIGINS", mode="before")
    @classmethod
    def parse_cors_origins(cls, v):
        if v is None:
            return ["http://localhost", "http://127.0.0.1"]

        if isinstance(v, list):
            return v

        if isinstance(v, str):
            v = v.strip()
            if not v:
                return ["http://localhost", "http://127.0.0.1"]

            if v.startswith("[") and v.endswith("]"):
                import json
                try:
                    return json.loads(v)
                except json.JSONDecodeError:
                    pass

            return [i.strip() for i in v.split(",") if i.strip()]

        raise ValueError(f"Invalid ALLOWED_ORIGINS format: {v}")
    
    @field_validator("ALLOWED_METHODS", mode="before")
    @classmethod
    def parse_cors_methods(cls, v):
        if isinstance(v, list):
            return v

        if isinstance(v, str):
            if v.startswith("[") and v.endswith("]"):
                import json
                try:
                    return json.loads(v)
                except json.JSONDecodeError:
                    pass

            return [i.strip() for i in v.split(",") if i.strip()]

        raise ValueError(f"Invalid ALLOWED_METHODS format: {v}")
    
    @field_validator("ALLOWED_HEADERS", mode="before")
    @classmethod
    def parse_cors_headers(cls, v):
        if isinstance(v, list):
            return v

        if isinstance(v, str):
            if v.startswith("[") and v.endswith("]"):
                import json
                try:
                    return json.loads(v)
                except json.JSONDecodeError:
                    pass

            return [i.strip() for i in v.split(",") if i.strip()]

        raise ValueError(f"Invalid ALLOWED_HEADERS format: {v}")


settings = Settings()