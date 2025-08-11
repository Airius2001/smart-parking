import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Container, Paper, Grid } from "@mui/material";
import Papa from "papaparse";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function CarOwnershipGraph({
  setActiveTab,
}: {
  setActiveTab: (tab: string) => void;
}) {
  type CarOwnershipData = {
    Year: string;
    CarOwnershipCount: number;
  };
  const [data, setData] = useState<CarOwnershipData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Read the CSV file in the public folder
    fetch("/data/car_ownership.csv")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to load CSV file");
        return response.text();
      })
      .then((csvText) => {
        const parsed = Papa.parse<CarOwnershipData>(csvText, {
          header: true,
          skipEmptyLines: true,
        });

        if (
          parsed.data.length > 0 &&
          "Year" in parsed.data[0] &&
          "CarOwnershipCount" in parsed.data[0]
        ) {
          const formattedData = parsed.data.map((row: any) => ({
            Year: row.Year,
            CarOwnershipCount: Number(row.CarOwnershipCount),
          }));
          setData(formattedData);
          setError(null);
        } else {
          setError("Invalid CSV format");
        }
      })
      .catch((err) => setError(err.message));
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 600,
            textAlign: "center",
            color: "primary.main",
            mb: 4,
          }}
        >
          Car Ownership Growth Insights
        </Typography>

        {error && (
          <Typography color="error" align="center" mb={4}>
            {error}
          </Typography>
        )}

        <Box sx={{ height: "400px", mb: 6 }}>
          {data.length > 0 ? (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="Year"
                  label={{
                    value: "Year",
                    position: "insideBottom",
                    offset: -15,
                    style: { fontWeight: "bold" },
                  }}
                />
                <YAxis
                  label={{
                    value: "Number of Cars",
                    angle: -90,
                    position: "insideLeft",
                    offset: -10,
                    style: { fontWeight: "bold" },
                  }}
                />
                <Tooltip />
                <Bar dataKey="CarOwnershipCount" fill="#3f51b5" />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="100%"
            >
              <Typography variant="h6" color="textSecondary">
                Loading data...
              </Typography>
            </Box>
          )}
        </Box>

        <Typography
          variant="h6"
          component="h2"
          gutterBottom
          sx={{ color: "text.secondary", mb: 4, textAlign: "center" }}
        >
          Analysis of traffic congestion causes in Melbourne's CBD
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 3, height: "100%" }}>
              <Typography variant="h6" component="h3" gutterBottom>
                <strong>Overall Trend</strong>
              </Typography>
              <Typography paragraph>
                From 2016 to 2018, the number of vehicles showed a significant
                increase, peaking in 2018 at 236,429 vehicles.
              </Typography>
              <Typography paragraph>
                In 2019 and 2020, the number of vehicles declined, particularly
                in 2020 when there was a substantial drop to 188,855 vehicles,
                which may be related to the decrease in transportation demand
                during the pandemic.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 3, height: "100%" }}>
              <Typography variant="h6" component="h3" gutterBottom>
                <strong>Possible Causes of Traffic Congestion</strong>
              </Typography>
              <Box component="ul" sx={{ pl: 2, mb: 0 }}>
                <Box component="li" sx={{ mb: 2 }}>
                  <Typography fontWeight="bold">
                    Increased vehicle numbers burdening roads:
                  </Typography>
                  <Typography>
                    The growth in car ownership from 2016 to 2018 means more
                    private cars on urban roads, especially in the CBD, directly
                    increasing congestion pressure.
                  </Typography>
                </Box>
                <Box component="li" sx={{ mb: 2 }}>
                  <Typography fontWeight="bold">
                    Infrastructure mismatch:
                  </Typography>
                  <Typography>
                    Vehicle growth outpaces road and public transport expansion,
                    creating supply-demand imbalance in the CBD's limited road
                    space.
                  </Typography>
                </Box>
                <Box component="li" sx={{ mb: 2 }}>
                  <Typography fontWeight="bold">
                    Insufficient public transport alternatives:
                  </Typography>
                  <Typography>
                    If public transport fails to attract commuters away from
                    private cars, vehicles remain the primary mode, worsening
                    CBD traffic.
                  </Typography>
                </Box>
                <Box component="li">
                  <Typography fontWeight="bold">
                    Pandemic impact on transportation behavior:
                  </Typography>
                  <Typography>
                    The 2020 vehicle decrease reflects reduced commuting during
                    lockdowns, but long-term CBD congestion will return as
                    vehicle numbers recover.
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper elevation={2} sx={{ p: 3 }}>
              <Typography variant="h6" component="h3" gutterBottom>
                <strong>Key problems</strong>
              </Typography>
              <Typography paragraph>
                The increase in vehicle ownership is a key factor in Melbourne
                CBD's traffic congestion, especially during the 2016-2018 growth
                period that stressed urban infrastructure.
              </Typography>
              <Typography>
                Addressing congestion requires simultaneous improvements in
                public transport, promotion of green travel, and enhanced road
                planning with smart traffic management systems.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Button
            variant="contained"
            size="large"
            onClick={() => setActiveTab("CarOwnership")}
            sx={{ px: 4, py: 1.5 }}
          >
            Back to Car Ownership Page
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
