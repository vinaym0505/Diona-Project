import React from 'react';

export interface ColumnDef<T> {
  header: string;
  accessor: (row: T) => React.ReactNode;
  width?: string;
}

interface ExpenseTableProps<T> {
  title: string;
  introLine?: string;
  footnote?: string;
  columns: ColumnDef<T>[];
  data: T[];
  emptyMessage?: string;
}

export function ExpenseTable<T>({
  title,
  introLine,
  footnote,
  columns,
  data,
  emptyMessage = 'No records submitted.',
}: ExpenseTableProps<T>) {
  const hasData = data && data.length > 0;

  return (
    <div className="expense-section">
      <h3 className="expense-section-header">{title}</h3>
      {introLine && <p className="expense-section-intro">{introLine}</p>}

      <table className="wcb-table">
        <thead>
          <tr>
            {columns.map((col, idx) => (
              <th key={idx} style={{ width: col.width }} scope="col">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {hasData ? (
            data.map((row, rowIdx) => (
              <tr key={rowIdx} className="wcb-table-row">
                {columns.map((col, colIdx) => (
                  <td key={colIdx} className="dynamic-val">
                    {col.accessor(row)}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr className="empty-row">
              <td colSpan={columns.length}>{emptyMessage}</td>
            </tr>
          )}
        </tbody>
      </table>

      {footnote && <p className="expense-section-footnote">{footnote}</p>}
    </div>
  );
}
