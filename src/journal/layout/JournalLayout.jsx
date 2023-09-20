import { Box, Toolbar } from '@mui/material';
import { Navbar, Sidebar } from '../components';

const drawerWidth = 280;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* Navbar */}
      <Navbar drawerWidth={drawerWidth} />

      {/* Sidebar */}
      <Sidebar drawerWidth={drawerWidth} />

      {/* Body */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
