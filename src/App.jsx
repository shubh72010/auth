import { Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import AuthPage from './AuthPage';
import InstructionsPage from './InstructionsPage';

function App() {
  return (
    <>
      <AppBar position="static" color="primary" enableColorOnDark>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Server Auth Portal
          </Typography>
          <Button color="inherit" component={Link} to="/">Auth</Button>
          <Button color="inherit" component={Link} to="/instructions">Instructions</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" sx={{ mt: 6 }}>
        <Box>
          <Routes>
            <Route path="/" element={<AuthPage />} />
            <Route path="/instructions" element={<InstructionsPage />} />
          </Routes>
        </Box>
      </Container>
    </>
  );
}

export default App
