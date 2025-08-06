"use client";

import { Box, Button, Typography } from "@mui/material";
import LeftImagePanel from "./home/component/LeftImgPannel";
import WebtitleImg from "./home/component/WebtitleImg";
import { useRouter } from "next/navigation";
import { Fade, Grow } from "@mui/material";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();

  // Control the state of animation display
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Trigger animation after the component is loaded
    setShow(true);
  }, []);

  const handleClick = () => {
    router.push("/login");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      {/* Website name and website logo - Add Fade animation*/}
      <Fade in={show} timeout={1000}>
        <div>
          <WebtitleImg />
        </div>
      </Fade>

      {/* Left image - Add Grow animation */}
      <Grow in={show} timeout={1000}>
        <Box sx={{ marginRight: "20px", position: "absolute", right: 1100 }}>
          <LeftImagePanel imageSrc="/next.svg" altText="Next.js Logo" />
        </Box>
      </Grow>

      {/* Right side introduces the website area - add fade animation */}
      <Fade in={show} timeout={1500}>
        <Typography
          variant="h3"
          component="h2"
          sx={{
            position: "absolute",
            top: 250,
            right: 600,
          }}
        >
          Xtreme Parking System
        </Typography>
      </Fade>

      <Fade in={show} timeout={2000}>
        <Typography
          variant="h6"
          component="h2"
          sx={{
            position: "absolute",
            top: 350,
            width: 700,
            right: 400,
          }}
        >
          Finding a parking spot in Melbourne’s busy CBD can be frustrating and
          time-consuming. Our smart parking system makes it easier for commuters
          and drivers by providing real-time availability, predictive insights,
          and timely notifications. Whether you're planning ahead or looking for
          a spot on the go, our platform helps you save time, avoid fines, and
          park with confidence.
        </Typography>
      </Fade>

      {/* Button - Add Grow Animation */}
      <Grow in={show} timeout={2500}>
        <Button
          variant="contained"
          onClick={handleClick}
          sx={{
            position: "absolute",
            top: 550,
            right: 920,
          }}
        >
          Let's get started
        </Button>
      </Grow>
    </Box>
  );
}
