import { Box, Typography } from "@mui/material";
import CarOwnership from "../homePage/sidebarElement/carOwnership";
import PopulationGrowth from "../homePage/sidebarElement/populationGrowth";
import ParkingAvailability from "../homePage/sidebarElement/parkingAvailability";
import ParkingAlarm from "../homePage/sidebarElement/parkingAlarm";

interface FeedProps {
  activeTab: string; // The currently selected menu item identifier
}

export default function Feed({ activeTab }: FeedProps) {
  // Render different content based on activeTab
  const renderContent = () => {
    switch (activeTab) {
      case "CarOwnership":
        return <CarOwnership />;
      case "PopulationGrowth":
        return <PopulationGrowth />;
      case "ParkingAvailability":
        return <ParkingAvailability />;
      case "ParkingAlarm":
        return <ParkingAlarm />;
      default:
        return <Typography>Select a menu item to view content</Typography>;
    }
  };

  return (
    <Box
      bgcolor={activeTab === "PopulationGrowth" ? "transparent" : "lightblue"}
      flex={10}
      p={0}
      color="black"
    >
      {renderContent()}
    </Box>
  );
}
