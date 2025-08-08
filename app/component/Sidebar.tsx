import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
  Drawer,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Dispatch, SetStateAction } from "react";
import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import Groups3Icon from "@mui/icons-material/Groups3";
import LocalParkingIcon from "@mui/icons-material/LocalParking";

interface SidebarProps {
  mode: string;
  setMode: Dispatch<SetStateAction<string>>;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

export default function Sidebar({ mode, setMode, setActiveTab }: SidebarProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Check if it is a mobile device
  const [mobileOpen, setMobileOpen] = React.useState(false); // Control the switch of the mobile drawer

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleThemeChange = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  const getIconColor = () => {
    return mode === "dark" ? "white" : "black";
  };

  const getSecondaryColor = () => {
    return mode === "dark" ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.6)";
  };

  const muiTheme = createTheme({
    components: {
      MuiListItemText: {
        styleOverrides: {
          secondary: {
            color: getSecondaryColor(),
          },
        },
      },
    },
  });

  const drawerContent = (
    <Box
      bgcolor={mode === "dark" ? "#121212" : "white"}
      flex={1}
      p={2}
      color={mode === "dark" ? "white" : "black"}
    >
      <ThemeProvider theme={muiTheme}>
        <List>
          {/* Car ownership button */}
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="#CarOwnership"
              onClick={() => setActiveTab("CarOwnership")}
            >
              <ListItemIcon>
                <DirectionsCarIcon sx={{ color: getIconColor() }} />
              </ListItemIcon>
              <ListItemText primary="Car Ownership" />
            </ListItemButton>
          </ListItem>

          {/* population growth button */}
          <ListItem disablePadding>
            <ListItemButton component="a" href="#PopulationGrowth">
              <ListItemIcon>
                <Groups3Icon sx={{ color: getIconColor() }} />
              </ListItemIcon>
              <ListItemText primary="Population Growth" />
            </ListItemButton>
          </ListItem>

          {/* parking availability */}
          <ListItem disablePadding>
            <ListItemButton component="a" href="#ParkingAvailability">
              <ListItemIcon>
                <LocalParkingIcon sx={{ color: getIconColor() }} />
              </ListItemIcon>
              <ListItemText primary="Parking Availability" />
            </ListItemButton>
          </ListItem>

          {/* theme setting button */}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DarkModeIcon sx={{ color: getIconColor() }} />
              </ListItemIcon>
              <Switch checked={mode === "dark"} onChange={handleThemeChange} />
            </ListItemButton>
          </ListItem>
        </List>
      </ThemeProvider>
    </Box>
  );

  return (
    <>
      {/* Mobile hamburger menu button */}
      {isMobile && (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ position: "fixed", top: 90, left: 10, zIndex: 1200 }}
        >
          <MenuIcon />
        </IconButton>
      )}

      {/* Use the Drawer component uniformly to render the sidebar. */}
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? mobileOpen : true}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          "& .MuiDrawer-paper": {
            width: 300,
            boxSizing: "border-box",
            position: "relative",
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}
