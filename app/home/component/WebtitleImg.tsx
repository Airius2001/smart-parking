import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function WebtitleImg() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      {/* Logo 图片 */}
      <Box
        sx={{
          position: "absolute",
          top: 16,
          left: 16,
          display: "flex",
          alignItems: "center",
          bgcolor: "white",
        }}
      >
        <Image
          src="/next.svg"
          alt="Xtreme logo"
          width={40}
          height={40}
          style={{
            objectFit: "cover",
          }}
        />
      </Box>

      {/* 文字标题 */}
      <Box
        sx={{
          position: "absolute",
          top: 16,
          left: 70,
          display: "flex",
          alignItems: "center",
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
      </Box>
    </Box>
  );
}
