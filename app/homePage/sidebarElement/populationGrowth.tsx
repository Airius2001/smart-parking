import PopulationChart from "@/app/component/PopulationChart";
import PopulationTable from "@/app/component/PopulationTable";
import populationData from "@/public/data/population.json";
import Link from "next/link";

function format(n: number) {
  return n.toLocaleString();
}

export default function PopulationPage() {
  const first = populationData[0].population; // 2020
  const last = populationData[populationData.length - 1].population; // 2024
  const delta = last - first;
  const years = populationData.length - 1;
  const cagr = Math.pow(last / first, 1 / years) - 1;

  return (
    <main
      className="min-h-screen text-white"
      style={{
        minHeight: "100vh",
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
          url("/image/Mel_bg.jpg")
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        color: "white",
      }}
    >
      <div
        className="max-w-6xl mx-auto px-6 py-10 space-y-8"
        style={{ padding: "40px", boxSizing: "border-box" }}
      >
        {/* Top: Title*/}
        <div className="flex items-center justify-between">
          <h1
            className="text-3xl font-extrabold tracking-tight"
            style={{
              fontSize: "3rem",
              fontWeight: "800",
              textAlign: "center",
              padding: "40px",
              marginBottom: "20px",
              // backgroundImage: 'url("/image/Title_bg.png")',
              // backgroundSize: 'cover',
              // backgroundPosition: 'center',
              color: "white",
              textShadow: "0 2px 6px rgba(0,0,0,0.6)",
              borderRadius: "12px",
            }}
          >
            Melbourne Population Growth
          </h1>
          <br />
          {/* Info Card */}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
            <div
              style={{
                flex: "1 1 200px",
                backgroundColor: "rgba(33, 150, 243, 0.85)",
                padding: "1rem",
                borderRadius: "0.75rem",
                boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "1rem",
                  color: "#000000ff",
                  fontWeight: "bold",
                }}
              >
                Population growth
              </div>
              <div
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "#EF4444",
                }}
              >
                +289,598
              </div>
            </div>

            <div
              style={{
                flex: "1 1 200px",
                backgroundColor: "rgba(33, 150, 243, 0.85)",
                padding: "1rem",
                borderRadius: "0.75rem",
                boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "1rem",
                  color: "#000000ff",
                  fontWeight: "bold",
                }}
              >
                CAGR
              </div>
              <div
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "#EF4444",
                }}
              >
                +1.40%
              </div>
            </div>

            <div
              style={{
                flex: "1 1 200px",
                backgroundColor: "rgba(33, 150, 243, 0.85)",
                padding: "1rem",
                borderRadius: "0.75rem",
                boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "1rem",
                  color: "#000000ff",
                  fontWeight: "bold",
                }}
              >
                Average annual growth rate
              </div>
              <div
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "#FF4D4F",
                }}
              >
                +1.13%
              </div>
            </div>
          </div>

          {/* <Link href="/" className="text-sm underline opacity-80 hover:opacity-100">
            Back to Home
          </Link> */}
          <p className="mt-2 text-sm text-gray-200 leading-relaxed">
            Melbourne's CBD is a vibrant hub of business, culture, and daily
            commuting. Every morning, thousands of residents and workers flood
            into the city, competing for limited road space, parking spots, and
            public transport seats. As the population steadily grows, the
            pressure on Melbourne's transport infrastructure is mounting, making
            it crucial for planners and policymakers to anticipate and address
            these challenges before congestion reaches critical levels.
          </p>
          <br />
        </div>

        {/* Population Table */}
        <div className="rounded-2xl bg-zinc-900/70 p-6 shadow">
          <PopulationTable data={populationData} />
          <br />
        </div>

        {/* Main card: left picture and right text (the small screen is changed to up and down) */}
        <div className="rounded-2xl bg-zinc-900/70 p-6 shadow grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="w-full h-[calc(100vh-160px)]">
            <PopulationChart title="Greater Melbourne Estimated Resident Population (2020-2024)" />
          </div>

          <div className="space-y-4">
            <br />
            <h2 className="text-xl font-semibold">
              Melbourne parking situation
            </h2>
            <br />
            <p className="pl-4">
              According to the official Australian Bureau of Statistics (ABS)
              data, the Melbourne CBD population is projected to grow steadily
              from <strong>5,061,107</strong> in 2020 to{" "}
              <strong>5,350,705</strong> in 2025, representing a total increase
              of <strong>289,598 people</strong> over five years. This
              translates to an
              <strong>
                {" "}
                average annual growth rate of approximately 1.13%
              </strong>
              , which is expected to significantly increase road usage, public
              transport demand, and parking competition in the city.
            </p>
            <br />

            <p className="pl-4 mt-2">
              The growth trend shows a slight dip in 2021, likely reflecting the
              impacts of the COVID-19 pandemic, followed by a consistent upward
              trajectory in subsequent years. Such population growth will likely
              result in:
            </p>

            <ul
              className="list-disc pl-6 mt-2 space-y-2 leading-relaxed"
              style={{
                paddingLeft: "1.5rem",
                marginTop: "8px",
                listStyleType: "disc",
              }}
            >
              <style jsx>{`
                ul li::marker {
                  color: #3b82f6;
                }
              `}</style>

              <li>
                <span style={{ fontWeight: "600", color: "white" }}>
                  Increased demand for road usage
                </span>
                , leading to heavier peak-hour congestion.
              </li>
              <li>
                <span style={{ fontWeight: "600", color: "white" }}>
                  Higher competition for limited parking spaces
                </span>
                , particularly in commercial and high-density residential zones.
              </li>
              <li>
                <span style={{ fontWeight: "600", color: "white" }}>
                  Additional strain on public transport systems
                </span>
                , requiring capacity upgrades.
              </li>
              <li>
                <span style={{ fontWeight: "600", color: "white" }}>
                  Greater pressure on urban infrastructure
                </span>
                , including roads, pedestrian networks, and cycling lanes.
              </li>
            </ul>
            <br />
            <p className="pl-4 mt-2">
              Understanding this trend is essential for urban planners,
              transport authorities, and policymakers to anticipate future
              challenges and implement proactive measures such as{" "}
              <strong>smart parking systems</strong>,{" "}
              <strong>congestion management strategies</strong>, and{" "}
              <strong>sustainable mobility solutions</strong>.
            </p>

            {/* data source */}
            <p className="text-xs opacity-70 mt-2">
              <br />
              Source: ABS Data by Region - Greater Melbourne (GCCSA: 2GMEL).
              Values are Estimated Resident Population (ERP).
              <br />
              <br />
            </p>

            <div className="flex flex-col gap-2 pt-2">
              <a
                href="https://dbr.abs.gov.au/region.html?lyr=gccsa&rgn=2GMEL"
                target="_blank"
                className="text-sm text-blue-600 underline hover:text-blue-800"
                style={{
                  color: "#2563eb",
                  textDecoration: "underline",
                  fontSize: "0.875rem",
                  whiteSpace: "nowrap",
                }}
              >
                ABS Source
              </a>
              <a> / </a>
              <a
                href="/data/population.json"
                download
                style={{
                  fontSize: "0.875rem",
                  backgroundColor: "#2563eb",
                  color: "white",
                  borderRadius: "0.5rem",
                  padding: "0.25rem 0.75rem",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                Download JSON
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
