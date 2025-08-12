import PopulationChart from "@/app/component/PopulationChart";
import PopulationTable from "@/app/component/PopulationTable";
import populationData from "@/public/data/population.json";

export default function PopulationPage() {
  const first = populationData[0].population;
  const last = populationData[populationData.length - 1].population;
  const years = populationData.length - 1;

  // Avoid "fixed" attachment on some mobile browsers (iOS jitter)
  const isMobile =
    typeof navigator !== "undefined" &&
    /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  return (
    <main
      className="min-h-screen text-white"
      style={{
        minHeight: "100vh",
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)),
          url("/image/Mel_bg.jpg")
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: isMobile ? "scroll" : "fixed",
        color: "white",
      }}
    >
      <div
        className="mx-auto space-y-8"
        style={{
          maxWidth: "1200px",
          paddingLeft: "clamp(12px, 3vw, 24px)",
          paddingRight: "clamp(12px, 3vw, 24px)",
          paddingTop: "clamp(12px, 3vw, 40px)",
          paddingBottom: "clamp(12px, 3vw, 40px)",
          boxSizing: "border-box",
          minWidth: 0,
        }}
      >
        {/* Title */}
        <header>
          <h1
            style={{
              fontSize: "clamp(24px, 4vw, 48px)",
              fontWeight: 800,
              textAlign: "center",
              lineHeight: 1.2,
              margin: 0,
              textShadow: "0 2px 6px rgba(0,0,0,0.6)",
            }}
          >
            Melbourne Population Growth
          </h1>
        </header>
        <br />
        <br />

        {/* KPI cards */}
        <section>
          <style>
            {`
              @media (min-width: 640px) {
                .info-grid { grid-template-columns: repeat(2, 1fr); }
              }
              @media (min-width: 1024px) {
                .info-grid { grid-template-columns: repeat(3, 1fr); }
              }
            `}
          </style>
          <div
            className="info-grid"
            style={{
              display: "grid",
              gap: "clamp(0.5rem, 2vw, 1rem)",
            }}
          >
            {[
              { label: "Population growth", value: "+289,598" },
              { label: "CAGR", value: "+1.40%" },
              { label: "Average annual growth rate", value: "+1.13%" },
            ].map((card) => (
              <div
                key={card.label}
                style={{
                  backgroundColor: "rgba(33, 150, 243, 0.85)",
                  padding: "clamp(0.6rem, 2vw, 1rem)",
                  borderRadius: "12px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                  textAlign: "center",
                  minWidth: 0,
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(0.8rem, 2vw, 0.95rem)",
                    color: "#000",
                    fontWeight: 700,
                    lineHeight: 1.2,
                  }}
                >
                  {card.label}
                </div>
                <div
                  style={{
                    marginTop: "clamp(4px, 1vw, 6px)",
                    fontSize: "clamp(1rem, 3vw, 1.25rem)",
                    fontWeight: 800,
                    color: "#fff",
                    lineHeight: 1.2,
                  }}
                >
                  {card.value}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Intro text */}
        <p
          style={{
            marginTop: "0.5rem",
            color: "rgba(255,255,255,0.9)",
            lineHeight: 1.65,
            fontSize: "clamp(0.85rem, 2vw, 1rem)",
          }}
        >
          Melbourne&apos;s CBD is a lively centre of business and culture. Each
          day, thousands travel in for work, competing for road space, parking,
          and public transport. As the population grows, the pressure on
          transport networks will keep rising, making forward planning essential
          to avoid severe congestion.
        </p>

        {/* Table */}
        <section
          style={{
            background: "rgba(24,24,27,0.7)",
            borderRadius: "16px",
            padding: "clamp(12px, 2vw, 16px)",
            boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
          }}
        >
          <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
            <PopulationTable data={populationData} />
          </div>
        </section>

        {/* Chart + text */}
        <section
          style={{
            background: "rgba(24,24,27,0.7)",
            borderRadius: "16px",
            padding: "clamp(12px, 2vw, 16px)",
            boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
          }}
        >
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem" }}
          >
            <div style={{ minWidth: 0 }}>
              <div
                style={{
                  background: "rgba(24,24,27,0.75)",
                  padding: "clamp(8px, 1.5vw, 12px)",
                  borderRadius: "12px",
                  height: "clamp(220px, 45vh, 380px)", // More compact chart height
                  minWidth: 0,
                  marginBottom: "1rem",
                }}
              >
                <PopulationChart title="Greater Melbourne ERP (2020-2024)" />
              </div>
              <br />
              <br />
              <p style={{ fontSize: 12, opacity: 0.8, marginTop: 12 }}>
                Source: ABS Data by Region - Greater Melbourne (GCCSA: 2GMEL).
                Values are Estimated Resident Population (ERP).
              </p>
              <br />
              {/* Links under chart */}
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <a
                  href="https://dbr.abs.gov.au/region.html?lyr=gccsa&rgn=2GMEL"
                  target="_blank"
                  style={{
                    fontSize: "clamp(12px, 1.8vw, 14px)",
                    color: "#60a5fa",
                    textDecoration: "underline",
                  }}
                >
                  ABS Source
                </a>
                <span aria-hidden>/</span>
                <a
                  href="/data/population.json"
                  download
                  style={{
                    fontSize: "clamp(12px, 1.8vw, 14px)",
                    backgroundColor: "#2563eb",
                    color: "white",
                    borderRadius: 8,
                    padding: "4px 12px",
                    textDecoration: "none",
                  }}
                >
                  Download JSON
                </a>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2
                style={{
                  fontSize: "clamp(16px, 2vw, 20px)",
                  fontWeight: 700,
                  margin: "4px 0 8px",
                }}
              >
                Melbourne parking situation
              </h2>
              <p style={{ lineHeight: 1.6, margin: 0 }}>
                ABS data shows Melbourne&apos;s population will grow from{" "}
                <strong>5.06M</strong> in 2020 to <strong>5.35M</strong> in 2024
                - an increase of <strong>289,598</strong> people (~
                <strong>1.13%</strong> per year). This growth will drive higher
                demand for roads, public transport, and parking.
              </p>

              <ul style={{ marginTop: 12, paddingLeft: 20, lineHeight: 1.6 }}>
                <li>
                  <strong style={{ color: "#fff" }}>
                    More road congestion
                  </strong>{" "}
                  during peak hours.
                </li>
                <li>
                  <strong style={{ color: "#fff" }}>
                    Tighter parking availability
                  </strong>{" "}
                  in busy areas.
                </li>
                <li>
                  <strong style={{ color: "#fff" }}>
                    Greater public transport demand
                  </strong>{" "}
                  needing upgrades.
                </li>
                <li>
                  <strong style={{ color: "#fff" }}>
                    Increased strain on city infrastructure
                  </strong>
                  .
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
