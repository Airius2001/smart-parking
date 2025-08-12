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
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { ListItemButton } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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

        {isMobile ? (
          <IconButton
            color="inherit"
            edge="end"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <MoreHorizIcon />
          </IconButton>
        ) : (
          <Box>
            <Button startIcon={<HomeIcon />} sx={{ color: "white" }} disabled>
              Home
            </Button>
            <Button startIcon={<InfoIcon />} sx={{ color: "white" }} disabled>
              About
            </Button>
            <Button
              startIcon={<ConnectWithoutContactIcon />}
              sx={{ color: "white" }}
              disabled
            >
              Contact Us
            </Button>
          </Box>
        )}

        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          PaperProps={{
            sx: { width: 150, top: "60px", position: "fixed" },
          }}
        >
          <List>
            {/* home */}
            <ListItem disablePadding>
              <ListItemButton
                component="a"
                href="#Home"
                onClick={toggleDrawer(false)}
              >
                <HomeIcon sx={{ mr: 1 }} />
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>

            {/* About */}
            <ListItem disablePadding>
              <ListItemButton
                component="a"
                href="#About"
                onClick={toggleDrawer(false)}
              >
                <InfoIcon sx={{ mr: 1 }} />
                <ListItemText primary="About" />
              </ListItemButton>
            </ListItem>

            {/* Contact Us */}
            <ListItem disablePadding>
              <ListItemButton
                component="a"
                href="#ContactUs"
                onClick={toggleDrawer(false)}
              >
                <ConnectWithoutContactIcon sx={{ mr: 1 }} />
                <ListItemText primary="Contact Us" />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
      </StyledToolBar>
    </AppBar>
  );
}
