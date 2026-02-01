import { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ExploreIcon from '@mui/icons-material/Explore';
import FeedbackIcon from '@mui/icons-material/Feedback';

function MainLayout() {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavigation = (path, hash = '') => {
    handleMenuClose();

    if (hash) {
      if (location.pathname !== path) {
        navigate(path);
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      } else {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    } else {
      navigate(path);
    }
  };

  const homeMenuItems = [
    { text: 'Inicio', icon: <HomeIcon sx={{ mr: 1, fontSize: 20 }} />, path: '/', hash: 'home' },
    { text: 'Experiencias', icon: <ExploreIcon sx={{ mr: 1, fontSize: 20 }} />, path: '/', hash: 'servicios' },
    { text: 'Opinión', icon: <FeedbackIcon sx={{ mr: 1, fontSize: 20 }} />, path: '/', hash: 'satisfaccion' },
  ];

  const otherMenuItems = [
    { text: 'Acerca de', icon: <InfoIcon sx={{ mr: 1, fontSize: 20 }} />, path: '/about' },
    { text: 'Contacto', icon: <ContactMailIcon sx={{ mr: 1, fontSize: 20 }} />, path: '/contact' },
  ];

  const allMenuItems = [...homeMenuItems, ...otherMenuItems];

  return (
    <Box>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: '#013A63',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
            onClick={() => handleNavigation('/', 'home')}
          >
            Teybat Explorers
          </Typography>

          {!isMobile ? (
            <Box sx={{ display: 'flex', gap: 1, flexGrow: 1, justifyContent: 'center' }}>
              {homeMenuItems.map((item) => (
                <Button
                  key={item.text}
                  color="inherit"
                  onClick={() => handleNavigation(item.path, item.hash)}
                  startIcon={item.icon}
                  sx={{
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  {item.text}
                </Button>
              ))}
              {otherMenuItems.map((item) => (
                <Button
                  key={item.text}
                  color="inherit"
                  onClick={() => handleNavigation(item.path)}
                  startIcon={item.icon}
                  sx={{
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>
          ) : (
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
              <IconButton
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
                sx={{
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                PaperProps={{
                  sx: {
                    mt: 1,
                    minWidth: 200,
                  },
                }}
              >
                {allMenuItems.map((item) => (
                  <MenuItem
                    key={item.text}
                    onClick={() => handleNavigation(item.path, item.hash)}
                    sx={{
                      py: 1.5,
                      '&:hover': {
                        bgcolor: '#A9D6E5',
                      },
                    }}
                  >
                    {item.icon}
                    {item.text}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Box component="main" sx={{ width: '100%' }}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default MainLayout;
