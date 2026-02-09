import { Box, Container, Typography, Button, IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import fondoDP from './../../public/image/FONDO_DP_INICIO.JPG'
import fondoDP2 from './../../public/image/FONDO_DP_2.JPG'
import Footer from './Footer'

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

  const handleScrollToSection = (sectionName) => {
    const sectionMap = {
      section1: section1Ref,
      section2: section2Ref,
      section3: section3Ref,
      section4: section4Ref,
      contact: null,
    };

    if (sectionName === 'contact') {
      navigate('/contact');
    } else if (sectionMap[sectionName]) {
      scrollToSection(sectionMap[sectionName]);
    }
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

      <Box ref={footerRef}>
        <Footer onScrollToSection={handleScrollToSection} />
      </Box>
    </Box>
  );
};

export default OnePage;