import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import { InputAdornment } from '@mui/material';
import { Fade, Slide, Grow } from '@mui/material';

interface RightContentPanelProps {
  activeContent: 'login' | 'register' | 'forgot';
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  error: string;
  loading: boolean;
  success: boolean;
  handleLogin: (e: React.FormEvent) => void;
}

export default function RightContentPanel({
  activeContent,
  email,
  setEmail,
  password,
  setPassword,
  error,
  loading,
  success,
  handleLogin
}: RightContentPanelProps) {
  return (
    <Box
      sx={{
        width: 700,
        height: 480,
        borderRadius: 1,
        bgcolor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative', // 为动画定位
        overflow: 'hidden',   // 防止动画溢出
      }}
    >
      {/* 登录面板 - 使用Slide动画 */}
      <Slide direction="left" in={activeContent === 'login'} mountOnEnter unmountOnExit>
        <Box sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          p: 2
        }}>
          <Typography
            variant="h3"
            sx={{
              color: 'black',
              textAlign: 'center',
              mb: 4
            }}
          >
            Login Here
          </Typography>

          <Box component="form" onSubmit={handleLogin} sx={{ width: '80%', maxWidth: 400 }}>
            {error && (
              <Fade in={!!error}>
                <Alert severity="error" sx={{ mb: 3 }}>
                  {error}
                </Alert>
              </Fade>
            )}

            {success && (
              <Fade in={success}>
                <Alert severity="success" sx={{ mb: 3 }}>
                  Login successful! Redirecting...
                </Alert>
              </Fade>
            )}

            <Grow in={activeContent === 'login'} timeout={800}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{ mb: 3 }}
              />
            </Grow>

            <Grow in={activeContent === 'login'} timeout={1000}>
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <KeyIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{ mb: 3 }}
              />
            </Grow>

            <Grow in={activeContent === 'login'} timeout={1200}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                disabled={loading}
                sx={{ height: 48 }}
              >
                {loading ? <CircularProgress size={24} /> : 'Login'}
              </Button>
            </Grow>
          </Box>
        </Box>
      </Slide>

      {/* 注册面板 - 使用Slide动画 */}
      <Slide direction="right" in={activeContent === 'register'} mountOnEnter unmountOnExit>
        <Box sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          p: 2
        }}>
          <Typography
            variant="h3"
            sx={{
              color: 'black',
              textAlign: 'center',
              mb: 4
            }}
          >
            Register Here
          </Typography>

          <Box component="form" sx={{ width: '80%', maxWidth: 400 }}>
            <Grow in={activeContent === 'register'} timeout={800}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{ mb: 3 }}
              />
            </Grow>

            <Grow in={activeContent === 'register'} timeout={1000}>
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <KeyIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{ mb: 3 }}
              />
            </Grow>

            <Grow in={activeContent === 'register'} timeout={1200}>
              <TextField
                fullWidth
                label="Confirm Password"
                type="password"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <KeyIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{ mb: 3 }}
              />
            </Grow>

            <Grow in={activeContent === 'register'} timeout={1400}>
              <Button
                fullWidth
                variant="contained"
                size="large"
                sx={{ height: 48 }}
              >
                Register now
              </Button>
            </Grow>
          </Box>
        </Box>
      </Slide>

      {/* 忘记密码面板 - 使用Slide动画 */}
      <Slide direction="up" in={activeContent === 'forgot'} mountOnEnter unmountOnExit>
        <Box sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          p: 2
        }}>
          <Typography
            variant="h3"
            sx={{
              color: 'black',
              textAlign: 'center',
              mb: 4
            }}
          >
            Reset Password Here
          </Typography>

          <Box component="form" sx={{ width: '80%', maxWidth: 400 }}>
            <Grow in={activeContent === 'forgot'} timeout={800}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{ mb: 3 }}
              />
            </Grow>

            <Grow in={activeContent === 'forgot'} timeout={1000}>
              <Button
                fullWidth
                variant="contained"
                size="large"
                sx={{ height: 48 }}
              >
                Send reset email
              </Button>
            </Grow>
          </Box>
        </Box>
      </Slide>
    </Box>
  );
}