import { TableSkeleton } from "@/components/ui/SkeletonLoader";
import EmptyState from "@/components/ui/EmptyState";

type ColumnAlign = "left" | "center" | "right";

type Column<T> = {
  key: keyof T | string;
  header: string;
  align?: ColumnAlign;
  render?: (row: T, index: number) => React.ReactNode;
};

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  emptyMessage?: string;
  loading?: boolean;
  emptyAction?: React.ReactNode;
  footer?: React.ReactNode;
  getRowClassName?: (row: T, index: number) => string;
  getRowKey?: (row: T, index: number) => string | number;
}

const alignClass: Record<ColumnAlign, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

export function DataTable<T>({
  columns,
  data,
  emptyMessage = "No records found",
  loading = false,
  emptyAction,
  footer,
  getRowClassName,
  getRowKey,
}: DataTableProps<T>) {
  if (loading) {
    return <TableSkeleton rows={5} />;
  }

  if (!data.length) {
    return (
      <EmptyState
        title={emptyMessage}
        description="There are no records to display at the moment."
        action={emptyAction}
      />
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden">

      <div
        className="overflow-auto max-h-[70vh] data-table-scroll"
        style={
          {
            scrollbarWidth: "thin",
            scrollbarGutter: "stable",
          } as React.CSSProperties
        }
      >
        <table className="min-w-full">

          {/* Table Header */}
          <thead className="sticky top-0 z-10 bg-gray-50 dark:bg-gray-700/60 backdrop-blur border-b border-gray-200 dark:border-gray-600">
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key as string}
                  className={`px-6 py-3 text-xs font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400 ${alignClass[col.align ?? "left"]}`}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {data.map((row, idx) => {
              const key = getRowKey ? getRowKey(row, idx) : idx;

              const rowClass =
                getRowClassName?.(row, idx) ??
                "hover:bg-gray-50 dark:hover:bg-gray-700/40 transition-colors";

              return (
                <tr key={key} className={rowClass}>
                  {columns.map((col) => (
                    <td
                      key={col.key as string}
                      className={`px-6 py-4 text-sm text-gray-900 dark:text-gray-100 ${alignClass[col.align ?? "left"]}`}
                    >
                      {col.render
                        ? col.render(row, idx)
                        : ((row as Record<string, unknown>)[
                            col.key as string
                          ] as React.ReactNode)}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>

          {/* Footer */}
          {footer != null && (
            <tfoot className="sticky bottom-0 z-10 bg-gray-50 dark:bg-gray-700/60 border-t border-gray-200 dark:border-gray-600">
              <tr>
                <td colSpan={columns.length} className="px-6 py-3">
                  {footer}
                </td>
              </tr>
            </tfoot>
          )}
        </table>
      </div>
    </div>
  );
}