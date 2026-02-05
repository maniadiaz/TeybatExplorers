import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Grid,
  Button,
  Container,
  TextField,
  Rating,
  Paper,
  IconButton,
  Fab,
} from '@mui/material';
import imagendp from './../../public/image/TEMPLADE_HOME.jpg'
import ExploreIcon from '@mui/icons-material/Explore';
import TerrainIcon from '@mui/icons-material/Terrain';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import NatureIcon from '@mui/icons-material/Nature';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function Home() {
  const navigate = useNavigate();
  const [showScrollTop, setShowScrollTop] = useState(false);

  const experiences = [
    {
      id: 1,
      title: 'Montañas Increíbles',
      description: 'Descubre las montañas más espectaculares y vive aventuras inolvidables en las alturas.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop',
      icon: <TerrainIcon sx={{ fontSize: 40 }} />,
      path: '/experience/mountains',
    },
    {
      id: 2,
      title: 'Playas Paradisíacas',
      description: 'Relájate en las playas más hermosas del mundo y disfruta del sol y el mar.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=300&fit=crop',
      icon: <BeachAccessIcon sx={{ fontSize: 40 }} />,
      path: '/experience/beaches',
    },
    {
      id: 3,
      title: 'Selvas Tropicales',
      description: 'Explora la biodiversidad de las selvas tropicales y conecta con la naturaleza.',
      image: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=500&h=300&fit=crop',
      icon: <NatureIcon sx={{ fontSize: 40 }} />,
      path: '/experience/jungle',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar botón cuando baje más de 100vh
      if (window.scrollY > window.innerHeight) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (path) => {
    navigate(path);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box>
      {/* Hero Section - Full Screen */}
      <Box
        id="home"
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #105c88c0 5%, #075b8b3d 100%)',
          color: 'white',
          position: 'relative',
          px: 0,
          pt: .3,
        }}
      >
        <Box
          component="img"
          src={imagendp}
          alt="Descripción del sitio"
          sx={{
            width: '100%',
            maxWidth: '100%', // Ajusta el tamaño a tu gusto
            height: 'auto',
            marginBottom: '2rem', // Espacio entre imagen y texto
            filter: 'drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.14))' // Sombra opcional para que resalte
          }}

        />
        <Typography
          variant="h1"
          component="h1"
          gutterBottom
          fontWeight="bold"
          sx={{
            fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4.5rem' },
            mb: 2,
          }}
        >
          ¿QUIENES SOMOS?
        </Typography>
  
        <Typography
          variant="h6"
          sx={{
            maxWidth: 800,
            mx: 'auto',
            mb: 5,
            opacity: 0.9,
            lineHeight: 1.6,
          }}
        >
          Somos un micronegocio enfocado en desempeñar actividades en la atención de llamadas y gestión de equipos manejado por un sistema de tickets dando
          así el seguimiento a nuestros clientes y garantizando el correcto funcionamiento de sus equipos y sus aplicaciones de trabajo.

        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            bgcolor: 'white',
            color: '#013A63',
            '&:hover': { bgcolor: '#A9D6E5', transform: 'scale(1.05)' },
            fontSize: '1.2rem',
            px: 5,
            py: 2,
            borderRadius: 3,
            transition: 'all 0.3s ease',
          }}
        >
          EQUIPO OPERATIVO
        </Button>
      </Box>

      {/* Scroll Down Indicator */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 30,
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'bounce 2s infinite',
          '@keyframes bounce': {
            '0%, 100%': { transform: 'translate(-50%, 0)' },
            '50%': { transform: 'translate(-50%, 10px)' },
          },
        }}
      >
        <IconButton
          onClick={() => scrollToSection('servicios')}
          sx={{
            color: 'white',
            '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' },
          }}
        >
          <KeyboardArrowDownIcon sx={{ fontSize: 50 }} />
        </IconButton>
      </Box>

      {/* Services Section - Full Screen */}
      <Box
        id="servicios"
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          bgcolor: '#af1495b7',
          py: 8,
          px: { xs: 3, md: 6 },
          position: 'relative',
        }}
      >
        <Container maxWidth="xl">
          <Typography
            variant="h2"
            component="h2"
            textAlign="center"
            gutterBottom
            sx={{
              mb: 6,
              color: '#0873c0',
              fontWeight: 'bold',
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            Nuestras Experiencias
          </Typography>
          <Grid
            container
            spacing={4}
            justifyContent="center"
          >
            {experiences.map((experience, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={experience.id}
                sx={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`,
                  '@keyframes fadeInUp': {
                    from: {
                      opacity: 0,
                      transform: 'translateY(30px)',
                    },
                    to: {
                      opacity: 1,
                      transform: 'translateY(0)',
                    },
                  },
                }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-12px) scale(1.02)',
                      boxShadow: '0 20px 40px rgba(1, 58, 99, 0.3)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="220"
                    image={experience.image}
                    alt={experience.title}
                    sx={{
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease',
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1, bgcolor: '#89C2D9', p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box sx={{ color: '#013A63', mr: 1 }}>{experience.icon}</Box>
                      <Typography variant="h5" component="h3" sx={{ color: '#012A4A', fontWeight: 'bold' }}>
                        {experience.title}
                      </Typography>
                    </Box>
                    <Typography variant="body1" color="text.secondary">
                      {experience.description}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ p: 2, bgcolor: '#61A5C2' }}>
                    <Button
                      fullWidth
                      variant="contained"
                      onClick={() => handleNavigate(experience.path)}
                      sx={{
                        bgcolor: '#013A63',
                        '&:hover': {
                          bgcolor: '#012A4A',
                          transform: 'scale(1.02)',
                        },
                        transition: 'all 0.3s ease',
                        py: 1.2,
                        fontSize: '1rem',
                      }}
                    >
                      Ver Detalles
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Scroll Down Indicator */}
          <Box
            sx={{
              textAlign: 'center',
              mt: 6,
            }}
          >
            <IconButton
              onClick={() => scrollToSection('satisfaccion')}
              sx={{
                color: '#013A63',
                animation: 'bounce 2s infinite',
                '&:hover': { bgcolor: 'rgba(1, 58, 99, 0.1)' },
              }}
            >
              <KeyboardArrowDownIcon sx={{ fontSize: 50 }} />
            </IconButton>
          </Box>
        </Container>
      </Box>

      {/* Satisfaction Form Section - Full Screen */}
      <Box
        id="satisfaccion"
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          bgcolor: '#468FAF',
          py: 8,
          px: 3,
        }}
      >
        <Container maxWidth="md">
          <Paper
            elevation={6}
            sx={{
              p: 5,
              bgcolor: 'white',
              borderRadius: 3,
              animation: 'fadeIn 0.8s ease-out',
              '@keyframes fadeIn': {
                from: { opacity: 0, transform: 'scale(0.95)' },
                to: { opacity: 1, transform: 'scale(1)' },
              },
            }}
          >
            <Typography
              variant="h3"
              component="h2"
              textAlign="center"
              gutterBottom
              sx={{
                color: '#013A63',
                mb: 2,
                fontWeight: 'bold',
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              ¿Cómo fue tu experiencia?
            </Typography>
            <Typography variant="body1" textAlign="center" sx={{ mb: 5, color: 'text.secondary' }}>
              Tu opinión es muy importante para nosotros. Ayúdanos a mejorar compartiendo tu experiencia.
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Nombre"
                  variant="outlined"
                  placeholder="Ingresa tu nombre"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': {
                        borderColor: '#013A63',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#013A63',
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  variant="outlined"
                  placeholder="tu@email.com"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': {
                        borderColor: '#013A63',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#013A63',
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Box>
                  <Typography variant="body1" gutterBottom fontWeight="medium">
                    Califica tu experiencia:
                  </Typography>
                  <Rating
                    name="satisfaction-rating"
                    defaultValue={0}
                    size="large"
                    sx={{
                      color: '#013A63',
                      '& .MuiRating-iconEmpty': {
                        color: '#89C2D9',
                      },
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Comentarios"
                  multiline
                  rows={4}
                  variant="outlined"
                  placeholder="Cuéntanos sobre tu experiencia..."
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': {
                        borderColor: '#013A63',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#013A63',
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: '#013A63',
                    '&:hover': {
                      bgcolor: '#012A4A',
                      transform: 'scale(1.02)',
                    },
                    py: 2,
                    fontSize: '1.1rem',
                    transition: 'all 0.3s ease',
                  }}
                  onClick={() => alert('¡Gracias por tu feedback!')}
                >
                  Enviar Comentarios
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>

      {/* Scroll to Top Button */}
      <Fab
        color="primary"
        aria-label="scroll to top"
        onClick={scrollToTop}
        sx={{
          position: 'fixed',
          bottom: 30,
          right: 30,
          bgcolor: '#013A63',
          '&:hover': {
            bgcolor: '#012A4A',
            transform: 'scale(1.1)',
          },
          transition: 'all 0.3s ease',
          opacity: showScrollTop ? 1 : 0,
          visibility: showScrollTop ? 'visible' : 'hidden',
          zIndex: 1000,
        }}
      >
        <KeyboardArrowUpIcon sx={{ fontSize: 30 }} />
      </Fab>
    </Box>
  );
}

export default Home;
