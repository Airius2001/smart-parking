import PopulationChart from '@/app/component/PopulationChart';
import populationData from '@/public/data/population.json';
import Link from 'next/link';

function format(n: number) {
  return n.toLocaleString();
}

export default function PopulationPage() {
  const first = populationData[0].population;                     // 2020
  const last  = populationData[populationData.length - 1].population; // 2024
  const delta = last - first;
  const years = populationData.length - 1;
  const cagr  = Math.pow(last / first, 1 / years) - 1;            

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-10 space-y-8">

        {/* Top: Back to Home Page & Title*/}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-extrabold tracking-tight">Melbourne Population Trend</h1>
          {/* <Link href="/" className="text-sm underline opacity-80 hover:opacity-100">
            Back to Home
          </Link> */}
        </div>

        {/* KPI Part */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-2xl bg-zinc-900/70 p-5 shadow">
            <div className="text-sm opacity-70">Population in 2020</div>
            <div className="text-2xl font-semibold">{format(first)}</div>
          </div>
          <div className="rounded-2xl bg-zinc-900/70 p-5 shadow">
            <div className="text-sm opacity-70">Population in 2024</div>
            <div className="text-2xl font-semibold">{format(last)}</div>
          </div>
          <div className="rounded-2xl bg-zinc-900/70 p-5 shadow">
            <div className="text-sm opacity-70">Increase (2020-2024)</div>
            <div className="text-2xl font-semibold">+{format(delta)}</div>
            <div className="text-xs opacity-70 mt-1">CAGR = {(cagr * 100).toFixed(2)}%</div>
          </div>
        </div>

        {/* Main card: left picture and right text (the small screen is changed to up and down) */}
        <div className="rounded-2xl bg-zinc-900/70 p-6 shadow grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="w-full h-[calc(100vh-160px)]">
            <PopulationChart title="Greater Melbourne ERP (2020-2024)" />
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Summary</h2>
            <p>
              According to the official Australian Bureau of Statistics (ABS) data, the Melbourne CBD population is
              projected to grow steadily from <strong>5,061,107</strong> in 2020 to <strong>5,350,705</strong> in 2025,
              representing a total increase of <strong>289,598 people</strong> over five years. This translates to an
              <strong> average annual growth rate of approximately 1.13%</strong>.
            </p>

            <p>
              The growth trend shows a slight dip in 2021, likely reflecting the impacts of the COVID-19 pandemic,
              followed by a consistent upward trajectory in subsequent years. Such population growth will likely result in:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Increased demand for road usage</strong>, leading to heavier peak-hour congestion.
              </li>
              <li>
                <strong>Higher competition for limited parking spaces</strong>, particularly in commercial and high-density
                residential zones.
              </li>
              <li>
                <strong>Additional strain on public transport systems</strong>, requiring capacity upgrades.
              </li>
              <li>
                <strong>Greater pressure on urban infrastructure</strong>, including roads, pedestrian networks, and cycling lanes.
              </li>
            </ul>

            <p>
              Understanding this trend is essential for urban planners, transport authorities, and policymakers to anticipate
              future challenges and implement proactive measures such as <strong>smart parking systems</strong>,{" "}
              <strong>congestion management strategies</strong>, and <strong>sustainable mobility solutions</strong>.
            </p>

            {/* little button */}
            <div className="flex gap-3 pt-2">
              <a
                href="/data/population.json"
                download
                className="text-sm rounded-lg bg-zinc-800 px-3 py-2 hover:bg-zinc-700"
              >
                Download JSON
              </a>
              <a
                href="https://www.abs.gov.au/"
                target="_blank"
                className="text-sm rounded-lg bg-zinc-800 px-3 py-2 hover:bg-zinc-700"
              >
                ABS Source
              </a>
            </div>
          </div>
        </div>

        {/* data source */}
        <p className="text-xs opacity-70">
          Source: ABS Data by Region - Greater Melbourne (GCCSA: 2GMEL). Values are Estimated Resident Population (ERP).
        </p>
      </div>
    </main>
  );
}