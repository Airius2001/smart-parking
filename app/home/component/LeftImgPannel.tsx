import * as React from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';

interface LeftImagePanelProps {
  imageSrc: string;
  altText: string;
}

export default function LeftImagePanel({ imageSrc, altText }: LeftImagePanelProps) {
  return (
    <Box
      sx={{
        width: 300,
        height: 480,
        borderRadius: 1,
        bgcolor: '#ffffff',
      }}
    >
      <Image
        src={imageSrc}
        alt={altText}
        width={100}
        height={100}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
    </Box>
  );
}