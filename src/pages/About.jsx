import { Box, Container, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';
import GroupIcon from '@mui/icons-material/Group';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const About = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ pt: 10, pb: 6, minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6, color: 'white' }}>
          <Typography variant="h2" gutterBottom fontWeight="bold">
            Sobre Nosotros
          </Typography>
          <Typography variant="h5" paragraph>
            Conoce más sobre Teybat Explorers
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
              <CardContent sx={{ textAlign: 'center', p: 4 }}>
                <InfoIcon sx={{ fontSize: 60, color: '#667eea', mb: 2 }} />
                <Typography variant="h5" gutterBottom fontWeight="bold">
                  Nuestra Misión
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Proporcionar experiencias únicas de exploración y aventura, conectando a las personas con la naturaleza y la cultura local.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
              <CardContent sx={{ textAlign: 'center', p: 4 }}>
                <GroupIcon sx={{ fontSize: 60, color: '#764ba2', mb: 2 }} />
                <Typography variant="h5" gutterBottom fontWeight="bold">
                  Nuestro Equipo
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Un equipo apasionado de guías expertos y profesionales dedicados a hacer de cada viaje una experiencia inolvidable.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
              <CardContent sx={{ textAlign: 'center', p: 4 }}>
                <EmojiEventsIcon sx={{ fontSize: 60, color: '#f093fb', mb: 2 }} />
                <Typography variant="h5" gutterBottom fontWeight="bold">
                  Nuestra Visión
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Ser la empresa líder en turismo de aventura, promoviendo el turismo sostenible y responsable.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box sx={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', borderRadius: 2, p: 4, mb: 4 }}>
          <Typography variant="h4" gutterBottom fontWeight="bold" color="primary">
            Nuestra Historia
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary">
            Teybat Explorers nació de la pasión por la aventura y el deseo de compartir las maravillas naturales 
            y culturales de nuestra región con viajeros de todo el mundo. Desde nuestros inicios, nos hemos 
            comprometido a ofrecer experiencias auténticas y memorables.
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary">
            Con años de experiencia en el sector turístico, hemos desarrollado una amplia gama de servicios 
            que van desde excursiones de un día hasta expediciones de varios días, siempre manteniendo los 
            más altos estándares de seguridad y calidad.
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Nuestro compromiso con la sostenibilidad y el respeto por las comunidades locales nos distingue. 
            Trabajamos de la mano con las poblaciones locales para garantizar que el turismo beneficie a todos.
          </Typography>
        </Box>

        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button 
            variant="contained" 
            size="large" 
            onClick={() => navigate('/')}
            sx={{ 
              mr: 2,
              backgroundColor: 'white',
              color: '#667eea',
              '&:hover': {
                backgroundColor: '#f0f0f0',
              }
            }}
          >
            Volver al Inicio
          </Button>
          <Button 
            variant="outlined" 
            size="large" 
            onClick={() => navigate('/contact')}
            sx={{ 
              borderColor: 'white',
              color: 'white',
              '&:hover': {
                borderColor: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }
            }}
          >
            Contáctanos
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
