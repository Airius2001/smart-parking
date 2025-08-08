"use client";

import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";
import Feed from "../component/Feed";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { useState } from "react";

export default function Dashboard() {
  const [mode, setMode] = useState("dark");

  const theme = createTheme({
    palette: {
      mode: mode === "dark" ? "dark" : "light", // Ensure that the value is 'light' or 'dark'.
    },
  });
  const [activeTab, setActiveTab] = useState("default"); // Default selected list

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
          minHeight: "100vh",
        }}
      >
        <Navbar />
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          sx={{ pt: 2 }}
        >
          <Sidebar setMode={setMode} mode={mode} setActiveTab={setActiveTab} />
          <Feed activeTab={activeTab} />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}
