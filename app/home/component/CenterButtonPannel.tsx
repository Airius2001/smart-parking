import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LockResetIcon from '@mui/icons-material/LockReset';

interface CenterButtonPanelProps {
  activeContent: 'login' | 'register' | 'forgot';
  setActiveContent: (content: 'login' | 'register' | 'forgot') => void;
}

export default function CenterButtonPanel({ activeContent, setActiveContent }: CenterButtonPanelProps) {
  return (
    <Stack direction="column">
      <Button
        variant={activeContent === 'login' ? 'contained' : 'outlined'}
        onClick={() => setActiveContent('login')}
        sx={{
          width: 300,
          height: 160,
          bgcolor: activeContent === 'login' ? '#4CD2E4' : 'transparent',
        }}
      >
        <AccountCircleIcon
          sx={{
            fontSize: 48,
            color: 'white'
          }}
        />
        <Typography variant="h6" color='white'>Login</Typography>
      </Button>

      <Button
        variant={activeContent === 'register' ? 'contained' : 'outlined'}
        onClick={() => setActiveContent('register')}
        sx={{
          width: 300,
          height: 160,
          bgcolor: activeContent === 'register' ? '#4CD2E4' : 'transparent',
        }}
      >
        <HowToRegIcon
          sx={{
            fontSize: 48,
            color: 'white'
          }}
        />
        <Typography variant="h6" color='white'>Register</Typography>
      </Button>

      <Button
        variant={activeContent === 'forgot' ? 'contained' : 'outlined'}
        onClick={() => setActiveContent('forgot')}
        sx={{
          width: 300,
          height: 160,
          bgcolor: activeContent === 'forgot' ? '#4CD2E4' : 'transparent',
        }}
      >
        <LockResetIcon
          sx={{
            fontSize: 48,
            color: 'white'
          }}
        />
        <Typography variant="h6" color='white'>Forgot Password</Typography>
      </Button>
    </Stack>
  );
}