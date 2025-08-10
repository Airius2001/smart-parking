'use client';

type Row = { year: number; population: number };

type Props = {
  data: Row[];
  className?: string;
  showTotal?: boolean;
  title?: string;
};

function fmt(n: number) {
  return n.toLocaleString();
}
function fmtPct(n: number) {
  const sign = n > 0 ? '+' : n < 0 ? '' : '';
  return `${sign}${(n * 100).toFixed(2)}%`;
}

export default function PopulationTable({
  data,
  className = '',
  showTotal = true,
  title,
}: Props) {
  const sorted = [...data].sort((a, b) => a.year - b.year);

  const yoy = sorted.map((row, i) => {
    if (i === 0) return undefined;
    const prev = sorted[i - 1].population;
    return (row.population - prev) / prev;
  });

  const first = sorted[0]?.population ?? 0;
  const last = sorted[sorted.length - 1]?.population ?? 0;
  const totalIncrease = last - first;
  const periods = Math.max(sorted.length - 1, 1);
  const cagr = first > 0 ? Math.pow(last / first, 1 / periods) - 1 : 0;

  return (
    <div className={className}>
      {title && (
        <h3
          style={{
            fontSize: '1.125rem',
            fontWeight: 600,
            marginBottom: '0.5rem',
          }}
        >
          {title}
        </h3>
      )}
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          border: '2px solid #4b5563', // gray-600
          fontSize: '0.875rem',
          textAlign: 'left',
        }}
      >
        <thead>
          <tr style={{ backgroundColor: '#e5e7eb', color: 'black' }}>
            <th
              style={{
                border: '1px solid #4b5563',
                padding: '0.5rem 0.75rem',
              }}
            >
              Year
            </th>
            <th
              style={{
                border: '1px solid #4b5563',
                padding: '0.5rem 0.75rem',
              }}
            >
              Population
            </th>
            <th
              style={{
                border: '1px solid #4b5563',
                padding: '0.5rem 0.75rem',
              }}
            >
              YoY Growth
            </th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((row, i) => (
            <tr
              key={row.year}
              style={{
                backgroundColor: i % 2 === 1 ? 'rgba(0,0,0,0.1)' : 'transparent',
              }}
            >
              <td
                style={{
                  border: '1px solid #4b5563',
                  padding: '0.5rem 0.75rem',
                }}
              >
                {row.year}
              </td>
              <td
                style={{
                  border: '1px solid #4b5563',
                  padding: '0.5rem 0.75rem',
                }}
              >
                {fmt(row.population)}
              </td>
              <td
                style={{
                  border: '1px solid #4b5563',
                  padding: '0.5rem 0.75rem',
                }}
              >
                {i === 0 ? '-' : fmtPct(yoy[i] ?? 0)}
              </td>
            </tr>
          ))}

          {showTotal && (
            <tr style={{ backgroundColor: '#f3f4f6', fontWeight: 600, color: 'black' }}>
              <td
                style={{
                  border: '1px solid #4b5563',
                  padding: '0.5rem 0.75rem',
                }}
              >
                Total ({sorted[0]?.year ?? ''}-{sorted[sorted.length - 1]?.year ?? ''})
              </td>
              <td
                style={{
                  border: '1px solid #4b5563',
                  padding: '0.5rem 0.75rem',
                }}
              >
                {totalIncrease >= 0 ? '+' : ''}
                {fmt(totalIncrease)}
              </td>
              <td
                style={{
                  border: '1px solid #4b5563',
                  padding: '0.5rem 0.75rem',
                }}
              >
                CAGR = {fmtPct(cagr)}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}