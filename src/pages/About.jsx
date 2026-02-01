import { Box, Typography, Paper, Container } from '@mui/material';

function About() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#A9D6E5', py: 6, px: 3 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" gutterBottom sx={{ color: '#013A63', fontWeight: 'bold' }}>
          Acerca de Teybat Explorers
        </Typography>

        <Paper sx={{ p: 4, mt: 3, bgcolor: 'white' }}>
        <Typography variant="h5" gutterBottom>
          Nuestra Misión
        </Typography>
        <Typography variant="body1" paragraph>
          Teybat Explorers es una plataforma dedicada a conectar aventureros y
          entusiastas de la exploración con experiencias únicas alrededor del
          mundo.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
          Quiénes Somos
        </Typography>
        <Typography variant="body1" paragraph>
          Somos un equipo apasionado por descubrir nuevos destinos y compartir
          experiencias inolvidables. Creemos que cada viaje es una oportunidad
          para crecer y conectar con otras culturas.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
          Tecnología
        </Typography>
        <Typography variant="body1">
          Esta aplicación está construida con tecnologías modernas:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1">React 18</Typography>
          </li>
          <li>
            <Typography variant="body1">Material-UI 5</Typography>
          </li>
          <li>
            <Typography variant="body1">React Router 6</Typography>
          </li>
          <li>
            <Typography variant="body1">Vite PWA</Typography>
          </li>
        </ul>
      </Paper>
      </Container>
    </Box>
  );
}

export default About;
