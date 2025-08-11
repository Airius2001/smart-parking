"use client";

import { useState } from "react";

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
  const sign = n > 0 ? "+" : n < 0 ? "" : "";
  return `${sign}${(n * 100).toFixed(2)}%`;
}

export default function PopulationTable({
  data,
  className = "",
  showTotal = true,
  title,
}: Props) {
  const [sortKey, setSortKey] = useState<"year" | "population" | "growth">(
    "year"
  );
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const sortedByYear = [...data].sort((a, b) => a.year - b.year);

  const rows = sortedByYear.map((row, i) => {
    if (i === 0) return { ...row, growth: undefined as number | undefined };
    const prev = sortedByYear[i - 1].population;
    const g = (row.population - prev) / prev;
    return { ...row, growth: g };
  });

  const first = rows[0]?.population ?? 0;
  const last = rows[rows.length - 1]?.population ?? 0;
  const totalIncrease = last - first;
  const periods = Math.max(rows.length - 1, 1);
  const cagr = first > 0 ? Math.pow(last / first, 1 / periods) - 1 : 0;

  const displayRows = [...rows].sort((a, b) => {
    const av =
      sortKey === "growth"
        ? a.growth ?? Number.NEGATIVE_INFINITY
        : (a as any)[sortKey];
    const bv =
      sortKey === "growth"
        ? b.growth ?? Number.NEGATIVE_INFINITY
        : (b as any)[sortKey];
    if (av === bv) return 0;
    return sortOrder === "asc" ? (av > bv ? 1 : -1) : av < bv ? 1 : -1;
  });

  const handleSort = (key: "year" | "population" | "growth") => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const arrow = (key: "year" | "population" | "growth") =>
    sortKey === key
      ? sortOrder === "asc"
        ? " (Ascending order) "
        : " (Descending order) "
      : "";

  return (
    <div className={className}>
      {title && (
        <h3
          style={{
            fontSize: "1.125rem",
            fontWeight: 600,
            marginBottom: "0.5rem",
          }}
        >
          {title}
        </h3>
      )}

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          border: "2px solid #4b5563",
          fontSize: "0.875rem",
          textAlign: "left",
          userSelect: "none",
        }}
      >
        <thead>
          <tr
            style={{
              backgroundColor: "rgba(33, 150, 243, 0.85)",
              color: "black",
            }}
          >
            <th
              onClick={() => handleSort("year")}
              style={{
                border: "1px solid #4b5563",
                padding: "0.5rem 0.75rem",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
              title="Sort by year"
            >
              Year{arrow("year")}
            </th>
            <th
              onClick={() => handleSort("population")}
              style={{
                border: "1px solid #4b5563",
                padding: "0.5rem 0.75rem",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
              title="Sort by population"
            >
              Population{arrow("population")}
            </th>
            <th
              onClick={() => handleSort("growth")}
              style={{
                border: "1px solid #4b5563",
                padding: "0.5rem 0.75rem",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
              title="Sort by YoY growth"
            >
              YoY Growth{arrow("growth")}
            </th>
          </tr>
        </thead>

        <tbody>
          {displayRows.map((row, i) => (
            <tr
              key={row.year}
              style={{
                backgroundColor:
                  i % 2 === 1 ? "rgba(0,0,0,0.1)" : "transparent",
              }}
            >
              <td
                style={{
                  border: "1px solid #4b5563",
                  padding: "0.5rem 0.75rem",
                }}
              >
                {row.year}
              </td>
              <td
                style={{
                  border: "1px solid #4b5563",
                  padding: "0.5rem 0.75rem",
                }}
              >
                {fmt(row.population)}
              </td>
              <td
                style={{
                  border: "1px solid #4b5563",
                  padding: "0.5rem 0.75rem",
                }}
              >
                {row.growth === undefined ? "-" : fmtPct(row.growth)}
              </td>
            </tr>
          ))}

          {showTotal && (
            <tr
              style={{
                backgroundColor: "rgba(243, 244, 246, 0.5)",
                fontWeight: 600,
                color: "black",
              }}
            >
              <td
                style={{
                  border: "1px solid #4b5563",
                  padding: "0.5rem 0.75rem",
                }}
              >
                Total ({rows[0]?.year ?? ""}-{rows[rows.length - 1]?.year ?? ""}
                )
              </td>
              <td
                style={{
                  border: "1px solid #4b5563",
                  padding: "0.5rem 0.75rem",
                }}
              >
                {totalIncrease >= 0 ? "+" : ""}
                {fmt(totalIncrease)}
              </td>
              <td
                style={{
                  border: "1px solid #4b5563",
                  padding: "0.5rem 0.75rem",
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
