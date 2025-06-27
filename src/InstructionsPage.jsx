import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';

const listMotion = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  transition: { staggerChildren: 0.1 },
};

export default function InstructionsPage() {
  return (
    <Paper elevation={6} sx={{ p: 4, borderRadius: 3 }} component={motion.div} {...listMotion}>
      <Typography variant="h5" gutterBottom>
        How to Authenticate
      </Typography>
      <List>
        <ListItem component={motion.li} {...listMotion}>
          <ListItemText primary="Go to the Auth page." />
        </ListItem>
        <ListItem component={motion.li} {...listMotion}>
          <ListItemText primary="Sign up with your username and password (first time only)." />
        </ListItem>
        <ListItem component={motion.li} {...listMotion}>
          <ListItemText primary="Login with your credentials." />
        </ListItem>
        <ListItem component={motion.li} {...listMotion}>
          <ListItemText primary="Once logged in, notify the server admin if required." />
        </ListItem>
      </List>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
        This portal is for demo purposes. For real authentication, connect to a backend server.
      </Typography>
    </Paper>
  );
} 