'use client';

import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale, LinearScale, PointElement, LineElement,
  Title, Tooltip, Legend, Filler,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

type Row = { year: number; population: number };

type Props = {
  title?: string;
  height?: number;
  showLegend?: boolean;
};

export default function PopulationChart({
  title = 'Greater Melbourne ERP (2020-2024)',
  height = 420,
  showLegend = true,
}: Props) {
  const [rows, setRows] = useState<Row[] | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const r = await fetch('/data/population.json', { cache: 'no-store' });
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        const data: Row[] = await r.json();
        setRows(data);
      } catch (e: any) {
        setErr(e.message || 'Failed to load data');
        setRows([]);
      }
    })();
  }, []);

  if (rows === null) {
    // Loading skeleton
    return (
      <div className="rounded-2xl bg-zinc-900/70 animate-pulse" style={{ height }} />
    );
  }
  if (err) {
    return (
      <div className="rounded-2xl bg-red-900/30 text-red-200 p-4">
        Failed to load population data: {err}
      </div>
    );
  }

  const labels = rows.map(r => r.year.toString());
  const values = rows.map(r => r.population);

  const data = {
    labels,
    datasets: [{
      label: 'Population',
      data: values,
      borderColor: 'rgba(0, 123, 255, 1)', 
backgroundColor: 'rgba(0, 123, 255, 0.15)', 
      pointRadius: 3,
      pointHoverRadius: 5,
      tension: 0.25,
      fill: true,
    }],
  };

  const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: showLegend, position: 'top' },
      title: { display: true, text: title },
      tooltip: {
        callbacks: {
          label: (ctx: any) => ` ${ctx.dataset.label}: ${Number(ctx.parsed.y).toLocaleString()}`,
        },
      },
    },
    scales: {
      x: {
      grid: { color: 'rgba(0,0,0,0.1)' }, // light black
      ticks: { color: 'rgba(0,0,0,0.8)' }, // dark blacj
    },
    y: {
      grid: { color: 'rgba(0,0,0,0.1)' }, 
      ticks: {
        color: 'rgba(0,0,0,0.8)', 
          callback: (v: any) => Number(v).toLocaleString(),
        },
        beginAtZero: false,
      },
    },
  };

  return (
    <div className="rounded-2xl bg-zinc-900/70 p-4 shadow" style={{ height }}>
      <Line data={data} options={options} />
    </div>
  );
}