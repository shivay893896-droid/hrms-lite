from fastapi.middleware.cors import CORSMiddleware
from app.config.settings import settings


def setup_cors(app):
    """Setup CORS middleware"""
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["http://localhost:3000",
            "https://hrms-lite-phi-two.vercel.app"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
