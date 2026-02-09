import { Box, Container, Typography, Button, IconButton, Grid } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import fondoDP from './../../public/image/FONDO_DP_INICIO.JPG'
import fondoDP2 from './../../public/image/FONDO_DP_2.JPG'
import logoFooter from './../../public/image/FOOTER_HD.JPG'

const OnePage = () => {
  const navigate = useNavigate();
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const footerRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToNext = (nextRef) => {
    nextRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box>
      <Box
        ref={section1Ref}
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: `linear-gradient(135deg, rgba(102, 126, 234, 0) 0%, rgba(118, 75, 162, 0) 100%), url(${fondoDP})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 20px',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          color: 'white',
          position: 'relative',
        }}
      >
        <IconButton
          onClick={() => scrollToNext(section2Ref)}
          sx={{
            position: 'absolute',
            bottom: 20,
            color: 'white',
            animation: 'bounce 2s infinite',
            '@keyframes bounce': {
              '0%, 20%, 50%, 80%, 100%': {
                transform: 'translateY(0)',
              },
              '40%': {
                transform: 'translateY(-10px)',
              },
              '60%': {
                transform: 'translateY(-5px)',
              },
            },
          }}
        >
          <KeyboardArrowDownIcon fontSize="large" />
        </IconButton>
      </Box>

      <Box
        ref={section2Ref}
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: `linear-gradient(135deg, rgba(74, 80, 134, 0.25), rgba(11, 7, 233, 0.11)), url(${fondoDP2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 20px',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          color: 'white',
          position: 'relative',
        }}
      >
        <Box sx={{
          display: 'flex',
          flexDirection:'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          width: '45%',
          px: 4,
          alignSelf: 'flex-start',
        }}>
          <Box maxWidth={'md'}>
            <Typography variant="h1" gutterBottom>
              ¿QUIENES SOMOS?
            </Typography>

            <Typography variant="h5" paragraph>
              Somos un micronegocio enfocado en desempeñar actividades en la atención de llamadas y gestión de equipos manejado por un sistema de tickets
              dando así el seguimiento a nuestros clientes y garantizando el correcto funcionamiento de sus equipos y sus aplicaciones de trabajo.
            </Typography>
          </Box>

          <Box sx={{ mt: 4, display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="contained" color="secondary" onClick={() => scrollToSection(section1Ref)}>
              Ir a Sección 1
            </Button>
            <Button variant="contained" color="secondary" onClick={() => scrollToSection(section3Ref)}>
              Ir a Sección 3
            </Button>
            <Button variant="contained" color="secondary" onClick={() => scrollToSection(section4Ref)}>
              Ir a Sección 4
            </Button>
          </Box>

          <Box sx={{ mt: 3, display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="outlined" sx={{ color: 'white', borderColor: 'white' }} onClick={() => navigate('/about')}>
              Sobre Nosotros
            </Button>
            <Button variant="outlined" sx={{ color: 'white', borderColor: 'white' }} onClick={() => navigate('/contact')}>
              Contacto
            </Button>
          </Box>
        </Box>
        <IconButton
          onClick={() => scrollToNext(section3Ref)}
          sx={{
            position: 'absolute',
            bottom: 20,
            color: 'white',
            animation: 'bounce 2s infinite',
            '@keyframes bounce': {
              '0%, 20%, 50%, 80%, 100%': {
                transform: 'translateY(0)',
              },
              '40%': {
                transform: 'translateY(-10px)',
              },
              '60%': {
                transform: 'translateY(-5px)',
              },
            },
          }}
        >
          <KeyboardArrowDownIcon fontSize="large" />
        </IconButton>
      </Box>

      <Box
        ref={section3Ref}
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
          color: 'white',
          position: 'relative',
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h2" gutterBottom>
            Contenido 3
          </Typography>
          <Typography variant="h5" paragraph>
            Explora nuevos destinos
          </Typography>
          <Box sx={{ mt: 4, display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="contained" color="secondary" onClick={() => scrollToSection(section1Ref)}>
              Ir a Sección 1
            </Button>
            <Button variant="contained" color="secondary" onClick={() => scrollToSection(section2Ref)}>
              Ir a Sección 2
            </Button>
            <Button variant="contained" color="secondary" onClick={() => scrollToSection(section4Ref)}>
              Ir a Sección 4
            </Button>
          </Box>
          <Box sx={{ mt: 3, display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="outlined" sx={{ color: 'white', borderColor: 'white' }} onClick={() => navigate('/about')}>
              Sobre Nosotros
            </Button>
            <Button variant="outlined" sx={{ color: 'white', borderColor: 'white' }} onClick={() => navigate('/contact')}>
              Contacto
            </Button>
          </Box>
        </Container>
        <IconButton
          onClick={() => scrollToNext(section4Ref)}
          sx={{
            position: 'absolute',
            bottom: 20,
            color: 'white',
            animation: 'bounce 2s infinite',
            '@keyframes bounce': {
              '0%, 20%, 50%, 80%, 100%': {
                transform: 'translateY(0)',
              },
              '40%': {
                transform: 'translateY(-10px)',
              },
              '60%': {
                transform: 'translateY(-5px)',
              },
            },
          }}
        >
          <KeyboardArrowDownIcon fontSize="large" />
        </IconButton>
      </Box>

      <Box
        ref={section4Ref}
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
          color: 'white',
          position: 'relative',
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h2" gutterBottom>
            Contenido 4
          </Typography>
          <Typography variant="h5" paragraph>
            Vive aventuras inolvidables
          </Typography>
          <Box sx={{ mt: 4, display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="contained" color="secondary" onClick={() => scrollToSection(section1Ref)}>
              Ir a Sección 1
            </Button>
            <Button variant="contained" color="secondary" onClick={() => scrollToSection(section2Ref)}>
              Ir a Sección 2
            </Button>
            <Button variant="contained" color="secondary" onClick={() => scrollToSection(section3Ref)}>
              Ir a Sección 3
            </Button>
          </Box>
          <Box sx={{ mt: 3, display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="outlined" sx={{ color: 'white', borderColor: 'white' }} onClick={() => navigate('/about')}>
              Sobre Nosotros
            </Button>
            <Button variant="outlined" sx={{ color: 'white', borderColor: 'white' }} onClick={() => navigate('/contact')}>
              Contacto
            </Button>
          </Box>
        </Container>
        <IconButton
          onClick={() => scrollToNext(footerRef)}
          sx={{
            position: 'absolute',
            bottom: 20,
            color: 'white',
            animation: 'bounce 2s infinite',
            '@keyframes bounce': {
              '0%, 20%, 50%, 80%, 100%': {
                transform: 'translateY(0)',
              },
              '40%': {
                transform: 'translateY(-10px)',
              },
              '60%': {
                transform: 'translateY(-5px)',
              },
            },
          }}
        >
          <KeyboardArrowDownIcon fontSize="large" />
        </IconButton>
      </Box>

      {/* FOOTER NUEVO */}
      <Box
        ref={footerRef}
        component="footer"
        sx={{
          bgcolor: '#2c3e50',
          color: 'white',
          py: 4,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Columna 1: Información de la empresa */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                SOPORTE OPERATIVO
              </Typography>
              <Typography variant="body2" sx={{ mt: 2 }}>
                Brindamos soluciones profesionales para tu negocio.
              </Typography>
            </Grid>

            {/* Columna 2: Enlaces rápidos */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Enlaces Rápidos
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 2 }}>
                <Button
                  sx={{ color: 'white', justifyContent: 'flex-start', textTransform: 'none' }}
                  onClick={() => scrollToSection(section1Ref)}
                >
                  Inicio
                </Button>
                <Button
                  sx={{ color: 'white', justifyContent: 'flex-start', textTransform: 'none' }}
                  onClick={() => scrollToSection(section2Ref)}
                >
                  Servicios
                </Button>
                <Button
                  sx={{ color: 'white', justifyContent: 'flex-start', textTransform: 'none' }}
                  onClick={() => navigate('/about')}
                >
                  Nosotros
                </Button>
                <Button
                  sx={{ color: 'white', justifyContent: 'flex-start', textTransform: 'none' }}
                  onClick={() => navigate('/contact')}
                >
                  Contacto
                </Button>
              </Box>
            </Grid>

            {/* Columna 3: Contacto */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Contacto
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mt: 2 }}>
                <Typography variant="body2">
                  📧 info@soporteoperativo.com
                </Typography>
                <Typography variant="body2">
                  📞 +52 123 456 7890
                </Typography>
                <Typography variant="body2">
                  📍 Mazatlán, Sinaloa, México
                </Typography>
              </Box>
            </Grid>
          </Grid>

          {/* Línea divisoria */}
          <Box sx={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)', my: 3 }} />

          {/* Imagen al final */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: 2,
            }}
          >
            <Box
              component="img"
              src={logoFooter}
              alt="Logo footer"
              sx={{
                maxWidth: '1800px',
                height: 'auto',
              }}
            />
          </Box>

          {/* Copyright */}
          <Typography variant="body2" align="center" sx={{ opacity: 0.8 }}>
            © {new Date().getFullYear()} Soporte Operativo. Todos los derechos reservados.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default OnePage;