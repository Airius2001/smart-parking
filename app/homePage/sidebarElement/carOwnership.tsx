import { Box, Button, Typography } from "@mui/material";

export default function CarOwnership({
  setActiveTab,
}: {
  setActiveTab: (tab: string) => void;
}) {
  return (
    <Box p={3}>
      {/* Section title */}
      <Box display="flex" justifyContent="center" alignItems="center" mb={3}>
        <Typography variant="h3" fontWeight={600} mr={2}>
          Car Ownership Trends in Melbourne
        </Typography>
      </Box>

      {/* subtitle */}
      <Box display="flex" justifyContent="center" alignItems="center" mb={3}>
        <Typography variant="h5" fontWeight={300} mr={2} color="grey">
          See how vehicle ownership has grown over the years and its impact on
          Melbourne's infrastructure and congestion.
        </Typography>
      </Box>

      {/* quick brief background overview */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography variant="h6" mr={2}>
          Since COVID-19, Melbourne has experienced a sharp rise in car
          ownership compared to similar cities worldwide. This growth puts
          additional strain on the CBD’s road network, contributing to traffic
          congestion and making it harder for commuters to find parking. Next,
          let us exploring the quarterly trends in car ownership over the past
          four years to see how the numbers are shaping Melbourne’s traffic
          future.
        </Typography>
      </Box>

      {/* guide button */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mb={3}
        mt={10}
      >
        <Button
          variant="contained"
          onClick={() => {
            setActiveTab("carOwnershipGraph");
          }}
        >
          Click to see the datasets
        </Button>
      </Box>
    </Box>
  );
}
