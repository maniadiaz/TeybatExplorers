import { Box, Container, Typography, Button, IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

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
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          position: 'relative',
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h2" gutterBottom>
            Contenido 1
          </Typography>
          <Typography variant="h5" paragraph>
            Bienvenido a nuestra página One Page
          </Typography>
          <Box sx={{ mt: 4, display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="contained" color="secondary" onClick={() => scrollToSection(section2Ref)}>
              Ir a Sección 2
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
        </Container>
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
          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          color: 'white',
          position: 'relative',
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h2" gutterBottom>
            Contenido 2
          </Typography>
          <Typography variant="h5" paragraph>
            Descubre nuestras experiencias únicas
          </Typography>
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
        </Container>
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

      <Box
        ref={footerRef}
        sx={{
          minHeight: '50vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#263238',
          color: 'white',
          py: 6,
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h3" gutterBottom>
            Contacto
          </Typography>
          <Typography variant="body1" paragraph>
            ¿Listo para tu próxima aventura?
          </Typography>
          <Typography variant="body2" paragraph>
            Email: info@teybatexplorers.com
          </Typography>
          <Typography variant="body2" paragraph>
            Teléfono: +123 456 7890
          </Typography>
          <Box sx={{ mt: 4 }}>
            <Button variant="outlined" color="inherit" onClick={() => scrollToSection(section1Ref)}>
              Volver al inicio
            </Button>
          </Box>
          <Typography variant="caption" sx={{ mt: 4, display: 'block' }}>
            © 2026 Teybat Explorers. Todos los derechos reservados.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default OnePage;
