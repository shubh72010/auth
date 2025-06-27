import { useState } from 'react';
import { Box, TextField, Button, Typography, Paper, Tabs, Tab, Alert } from '@mui/material';
import { motion } from 'framer-motion';

const tabMotion = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

export default function AuthPage() {
  const [tab, setTab] = useState(0);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleTabChange = (_, newValue) => {
    setTab(newValue);
    setError('');
    setSuccess('');
    setUsername('');
    setPassword('');
  };

  const handleAuth = (type) => {
    setError('');
    setSuccess('');
    if (!username || !password) {
      setError('Please fill in all fields.');
      return;
    }
    if (type === 'signup') {
      if (localStorage.getItem(`user_${username}`)) {
        setError('User already exists.');
        return;
      }
      localStorage.setItem(`user_${username}`, password);
      setSuccess('Signup successful! You can now log in.');
    } else {
      const stored = localStorage.getItem(`user_${username}`);
      if (!stored || stored !== password) {
        setError('Invalid credentials.');
        return;
      }
      setSuccess('Login successful! Welcome.');
    }
  };

  return (
    <Paper elevation={6} sx={{ p: 4, borderRadius: 3 }} component={motion.div} {...tabMotion}>
      <Tabs value={tab} onChange={handleTabChange} centered sx={{ mb: 2 }}>
        <Tab label="Login" />
        <Tab label="Sign Up" />
      </Tabs>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}
      <Box component="form" noValidate autoComplete="off" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField label="Username" value={username} onChange={e => setUsername(e.target.value)} fullWidth />
        <TextField label="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} fullWidth />
        <Button variant="contained" size="large" onClick={() => handleAuth(tab === 0 ? 'login' : 'signup')}>
          {tab === 0 ? 'Login' : 'Sign Up'}
        </Button>
      </Box>
      <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block', textAlign: 'center' }}>
        This is a demo authentication. No real server is used.
      </Typography>
    </Paper>
  );
} 