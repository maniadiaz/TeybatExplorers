import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#013A63', // Header color
      light: '#2C7DA0',
      dark: '#012A4A',
      contrastText: '#fff',
    },
    secondary: {
      main: '#468FAF',
      light: '#61A5C2',
      dark: '#01497C',
      contrastText: '#fff',
    },
    background: {
      default: '#1208C9', // Body color
      paper: '#ffffffcc',
    },
    custom: { 
      header: '#013A63',
      footer: '#014F86',
      body: '#89C2D9',
      lightBlue: '#A9D6E5',
      mediumBlue: '#61A5C2',
      darkBlue: '#012A4A',
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

export default theme;
