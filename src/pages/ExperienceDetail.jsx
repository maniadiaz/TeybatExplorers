import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  Container,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TerrainIcon from '@mui/icons-material/Terrain';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import NatureIcon from '@mui/icons-material/Nature';

const experienceData = {
  mountains: {
    title: 'MISION',
    description: 'Vive la emoción de conquistar las cimas más altas del mundo. Nuestras expediciones a las montañas te llevarán a lugares donde el cielo se encuentra con la tierra.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
    icon: <TerrainIcon sx={{ fontSize: 60 }} />,
    features: [
      'Guías expertos certificados',
      'Equipo de alta montaña incluido',
      'Campamentos base confortables',
      'Seguro de viaje completo',
      'Fotografía profesional',
    ],
    duration: '7-14 días',
    difficulty: 'Media a Alta',
    price: 'Desde $1,500 USD',
  },
  beaches: {
    title: 'Playas Paradisíacas',
    description: 'Relájate en las costas más hermosas del planeta. Arena blanca, aguas cristalinas y atardeceres inolvidables te esperan en nuestros destinos de playa.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=600&fit=crop',
    icon: <BeachAccessIcon sx={{ fontSize: 60 }} />,
    features: [
      'Resort todo incluido',
      'Actividades acuáticas ilimitadas',
      'Spa y wellness center',
      'Gastronomía internacional',
      'Excursiones a islas cercanas',
    ],
    duration: '5-10 días',
    difficulty: 'Baja',
    price: 'Desde $1,200 USD',
  },
  jungle: {
    title: 'Selvas Tropicales',
    description: 'Adéntrate en el corazón de la selva y descubre la increíble biodiversidad de los ecosistemas tropicales. Una experiencia única de conexión con la naturaleza.',
    image: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=1200&h=600&fit=crop',
    icon: <NatureIcon sx={{ fontSize: 60 }} />,
    features: [
      'Tours guiados por biólogos',
      'Observación de fauna silvestre',
      'Alojamiento eco-friendly',
      'Canopy y senderismo',
      'Talleres de conservación',
    ],
    duration: '6-12 días',
    difficulty: 'Media',
    price: 'Desde $1,800 USD',
  },
};

function ExperienceDetail() {
  const { type } = useParams();
  const navigate = useNavigate();
  const experience = experienceData[type];

  if (!experience) {
    return (
      <Container>
        <Typography variant="h4">Experiencia no encontrada</Typography>
        <Button onClick={() => navigate('/')} startIcon={<ArrowBackIcon />}>
          Volver al inicio
        </Button>
      </Container>
    );
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#A9D6E5' }}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Button
          onClick={() => navigate('/')}
          startIcon={<ArrowBackIcon />}
          sx={{ mb: 3, color: '#013A63', bgcolor: 'white', '&:hover': { bgcolor: '#f5f5f5' } }}
        >
          Volver al inicio
        </Button>
      </Container>

      <Box
        sx={{
          backgroundImage: `linear-gradient(rgba(1, 58, 99, 0.7), rgba(1, 58, 99, 0.7)), url(${experience.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          py: 10,
          px: 3,
          mb: 4,
          textAlign: 'center',
        }}
      >
        <Box sx={{ color: 'white', mb: 2 }}>{experience.icon}</Box>
        <Typography variant="h2" component="h1" gutterBottom fontWeight="bold">
          {experience.title}
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: 800, mx: 'auto' }}>
          {experience.description}
        </Typography>
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 4, mb: 4, bgcolor: '#89C2D9' }}>
              <Typography variant="h4" gutterBottom sx={{ color: '#012A4A' }}>
                Lo que incluye
              </Typography>
              <List>
                {experience.features.map((feature, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <CheckCircleIcon sx={{ color: '#013A63' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={feature}
                      sx={{ color: '#012A4A' }}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>

            <Paper sx={{ p: 4, bgcolor: '#61A5C2' }}>
              <Typography variant="h4" gutterBottom sx={{ color: '#012A4A' }}>
                Sobre esta experiencia
              </Typography>
              <Typography sx={{ mb: 2 }}>
                Esta es una aventura diseñada para aquellos que buscan algo más que un simple viaje.
                Nuestro equipo de expertos te guiará a través de cada paso, asegurando tu seguridad
                y comodidad mientras descubres lugares increíbles.
              </Typography>
              <Typography>
                Cada expedición está cuidadosamente planeada para maximizar tu experiencia,
                combinando aventura, cultura y naturaleza en un paquete inolvidable.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, mb: 3, bgcolor: 'white', border: '2px solid #013A63' }}>
              <Typography variant="h5" gutterBottom sx={{ color: '#013A63' }}>
                Detalles del viaje
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" color="text.secondary">
                  Duración
                </Typography>
                <Typography variant="body1" fontWeight="bold">
                  {experience.duration}
                </Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" color="text.secondary">
                  Dificultad
                </Typography>
                <Typography variant="body1" fontWeight="bold">
                  {experience.difficulty}
                </Typography>
              </Box>
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" color="text.secondary">
                  Precio
                </Typography>
                <Typography variant="h6" fontWeight="bold" sx={{ color: '#013A63' }}>
                  {experience.price}
                </Typography>
              </Box>
              <Button
                fullWidth
                variant="contained"
                size="large"
                sx={{
                  bgcolor: '#013A63',
                  '&:hover': { bgcolor: '#012A4A' },
                  py: 1.5,
                }}
              >
                Reservar Ahora
              </Button>
            </Paper>

            <Paper sx={{ p: 3, bgcolor: '#A9D6E5' }}>
              <Typography variant="h6" gutterBottom sx={{ color: '#012A4A' }}>
                ¿Necesitas ayuda?
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Nuestro equipo está disponible 24/7 para responder todas tus preguntas.
              </Typography>
              <Button
                fullWidth
                variant="outlined"
                onClick={() => navigate('/contact')}
                sx={{
                  borderColor: '#013A63',
                  color: '#013A63',
                  '&:hover': { borderColor: '#012A4A', bgcolor: 'rgba(1, 58, 99, 0.1)' },
                }}
              >
                Contáctanos
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ExperienceDetail;
