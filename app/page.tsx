"use client";

import { Box, Button, Typography } from "@mui/material";
import LeftImagePanel from "./component/LeftImgPannel";
import WebtitleImg from "./component/WebtitleImg";
import { useRouter } from "next/navigation";
import { Fade, Grow } from "@mui/material";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const handleClick = () => {
    router.push("/homePage");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        px: 2,
        py: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      {/*  Webtitle */}
      <Fade in={show} timeout={1000}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 4,
            marginTop: "-750px",
          }}
        >
          <WebtitleImg />
        </Box>
      </Fade>

      {/* left logo and brief intro */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          maxWidth: 1200,
        }}
      >
        {/* logo part */}
        <Grow in={show} timeout={1000}>
          <Box sx={{ width: { xs: "80%", md: "30%" } }}>
            <LeftImagePanel imageSrc="/next.svg" altText="Next.js Logo" />
          </Box>
        </Grow>

        {/* intro part */}
        <Fade in={show} timeout={1500}>
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
              gap: 3,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: "Arial, sans-serif",
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              Xtreme Parking System
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", md: "1.125rem" },
                maxWidth: 600,
              }}
            >
              Finding a parking spot in Melbourne’s busy CBD can be frustrating
              and time-consuming. Our smart parking system makes it easier by
              providing real-time availability, predictive insights, and
              notifications. Save time, avoid fines, and park with confidence.
            </Typography>

            <Grow in={show} timeout={2000}>
              <Button
                variant="contained"
                onClick={handleClick}
                sx={{ mt: 2, px: 4 }}
              >
                Let's get started
              </Button>
            </Grow>
          </Box>
        </Fade>
      </Box>
    </Box>
  );
}
