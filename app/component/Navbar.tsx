"use client";
import {
  AppBar,
  styled,
  Toolbar,
  Typography,
  Box,
  Button,
} from "@mui/material";
import Image from "next/image";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

export default function Navbar() {
  return (
    <AppBar position="sticky">
      <StyledToolBar>
        {/* logo and title */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {" "}
          {/* Control the spacing between the logo and the title. */}
          {/* Layout */}
          <Box sx={{ display: { xs: "block", sm: "block" } }}>
            <Image
              src="/next.svg"
              alt="Xtreme logo"
              width={40}
              height={40}
              style={{ objectFit: "cover" }}
            />
          </Box>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Arial, sans-serif",
              fontWeight: "bold",
              fontStyle: "italic",
              display: { xs: "none", sm: "block" },
            }}
          >
            Xtreme Parking System
          </Typography>
        </Box>

        <Box>
          <Button startIcon={<HomeIcon />} sx={{ color: "white" }}>
            Home
          </Button>
          <Button startIcon={<InfoIcon />} sx={{ color: "white" }}>
            About
          </Button>
          <Button
            startIcon={<ConnectWithoutContactIcon />}
            sx={{ color: "white" }}
          >
            Contact
          </Button>
        </Box>
      </StyledToolBar>
    </AppBar>
  );
}
