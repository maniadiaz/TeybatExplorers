import { Box, Container, Typography, Button, IconButton, Card, CardContent } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tree, TreeNode } from 'react-organizational-chart';
import fondoDP from './../../public/image/FONDO_DP_INICIO.JPG'
import fondoDP2 from './../../public/image/FONDO_DP_2.JPG'
import fondoDP3 from './../../public/image/FONDO_DP_REDPHONE.JPG'
import Footer from './Footer'

// ✅ Componente del nodo con hover
const NodoOrg = ({ nombre, puesto, imagen }) => {
  const [hover, setHover] = useState(false);

  return (
    <Box
      sx={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Nodo */}
      <Card sx={{
        display: 'inline-block',
        px: 1,
        py: 0.5,
        borderRadius: 2,
        backgroundColor: 'rgba(25, 118, 210, 0.85)',
        color: 'white',
        minWidth: 120,
        boxShadow: 3,
        cursor: 'pointer',
        transition: 'transform 0.2s',
        transform: hover ? 'scale(1.05)' : 'scale(1)',
      }}>
        <CardContent sx={{ p: '6px !important' }}>
          <Typography variant="subtitle2" fontWeight="bold">{nombre}</Typography>
          <Typography variant="caption">{puesto}</Typography>
        </CardContent>
      </Card>

      {/* Tarjeta flotante */}
      {hover && (
        <Box sx={{
          position: 'absolute',
          top: '-175px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 999,
          backgroundColor: 'white',
          borderRadius: 3,
          boxShadow: 6,
          p: 2,
          minWidth: 150,
          textAlign: 'center',
          pointerEvents: 'none',
        }}>
          <Box
            component="img"
            src={imagen || 'https://via.placeholder.com/80?text=👤'}
            alt={nombre}
            sx={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              objectFit: 'cover',
              mb: 1,
              border: '3px solid #1976d2',
            }}
          />
          <Typography variant="subtitle2" fontWeight="bold" color="text.primary">
            {nombre}
          </Typography>
          <Typography variant="caption" color="text.secondary" display="block">
            {puesto}
          </Typography>
          {/* Triángulo */}
          <Box sx={{
            position: 'absolute',
            bottom: '-10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 0,
            height: 0,
            borderLeft: '10px solid transparent',
            borderRight: '10px solid transparent',
            borderTop: '10px solid white',
          }} />
        </Box>
      )}
    </Box>
  );
};

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
              '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
              '40%': { transform: 'translateY(-10px)' },
              '60%': { transform: 'translateY(-5px)' },
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
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          background: `linear-gradient(135deg, rgba(74, 80, 134, 0.25), rgba(11, 7, 233, 0.11)), url(${fondoDP2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 20px',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          color: 'white',
          position: 'relative',
        }}
      >
        {/* TEXTO A LA IZQUIERDA */}
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          width: '45%',
          px: 6,
          py: 8,
        }}>
          <Box maxWidth={'md'}>
            <Typography variant="h1" gutterBottom sx={{ textAlign: 'center' }}>
              ¿QUIENES SOMOS?
            </Typography>
            <Typography variant="h5" paragraph sx={{ textAlign: 'justify' }}>
              Somos un micronegocio enfocado en desempeñar actividades en la atención de llamadas y gestión de equipos manejado por un sistema de tickets
              dando así el seguimiento a nuestros clientes y garantizando el correcto funcionamiento de sus equipos y sus aplicaciones de trabajo.
            </Typography>
          </Box>
        </Box>

        {/* ORGANIGRAMA CENTRADO ABAJO */}
        <Box sx={{
          width: '100%',
          pb: 10,
          px: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          overflowX: 'auto',
        }}>


          {/* 👇 El Tree debe estar DENTRO de este Box */}
          <Box sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.55)',
            borderRadius: 4,
            p: 4,
            backdropFilter: 'blur(4px)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            <Typography variant="h1" gutterBottom sx={{ textAlign: 'center', mb: 10 }}>
              Estructura Operativa Actual
            </Typography>
            <Tree
              lineWidth="2px"
              lineColor="rgba(255,255,255,0.8)"
              lineBorderRadius="8px"
              label={<NodoOrg nombre="Leonardo Carbajal" puesto="Lider del Micronegocio" imagen="" />}
            >
              <TreeNode label={<NodoOrg nombre="Oscar Gomez" puesto="Coordinador de Equipos" imagen="" />}>
                <TreeNode label={<NodoOrg nombre="Elias Morales" puesto="Analista de Soporte Tecnico" imagen=" " />} />
                <TreeNode label={<NodoOrg nombre="Carlos Suárez" puesto="Analista de Soporte Tecnico" imagen=" " />} />
              </TreeNode>
              <TreeNode label={<NodoOrg nombre="Bryan Aguilar" puesto="Coordinador de Llamadas" imagen=" " />}>
                <TreeNode label={<NodoOrg nombre="Jesus Diaz" puesto="Analista de Soporte Tecnico" imagen="/image/JesusDP.jpg" />} />
                <TreeNode label={<NodoOrg nombre="Lizbeth Ruelas" puesto="Analista de Soporte Tecnico" imagen="/image/LizbethDP.jpg" />} />
                <TreeNode label={<NodoOrg nombre="Baldomero Mencinas" puesto="Analista de Soporte Tecnico" imagen=" " />} />
                <TreeNode label={<NodoOrg nombre="Cristina Lopez" puesto="Analista de Soporte Tecnico" imagen=" " />} />
                <TreeNode label={<NodoOrg nombre="Abraham Mateos" puesto="Analista de Soporte Tecnico" imagen=" " />} />
                <TreeNode label={<NodoOrg nombre="Marcos Campos" puesto="Analista de Soporte Tecnico" imagen=" " />} />
                <TreeNode label={<NodoOrg nombre="Jose Lizarraga" puesto="Analista de Soporte Tecnico" imagen=" " />} />
                <TreeNode label={<NodoOrg nombre="Kevin Estrada" puesto="Analista de Soporte Tecnico" imagen=" " />} />
              </TreeNode>
            </Tree>
          </Box>

        </Box>


        <IconButton
          onClick={() => scrollToNext(section3Ref)}
          sx={{
            position: 'absolute',
            bottom: 20,
            left: '50%',                        // 👈 centrado horizontal
            transform: 'translateX(-50%)',      // 👈 ajuste para quedar exactamente al centro
            color: 'white',
            animation: 'bounce 2s infinite',
            '@keyframes bounce': {
              '0%, 20%, 50%, 80%, 100%': { transform: 'translateX(-50%) translateY(0)' },       // 👈 mantener el translateX en el bounce
              '40%': { transform: 'translateX(-50%) translateY(-10px)' },
              '60%': { transform: 'translateX(-50%) translateY(-5px)' },
            },
          }}
        >
          <KeyboardArrowDownIcon fontSize="large" />
        </IconButton>
      </Box>

      <Box
        ref={section3Ref}
        id="mision"
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          background: `linear-gradient(135deg, rgba(74, 80, 134, 0.25), rgba(11, 7, 233, 0.11)), url(${fondoDP3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 20px',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          color: 'white',
          position: 'relative',
          px: 6,
          py: 10,
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h1" gutterBottom>MISION</Typography>
          <Typography variant="h5" paragraph>Explora nuevos destinos</Typography>
        </Container>
        <IconButton
          onClick={() => scrollToNext(section4Ref)}
          sx={{
            position: 'absolute',
            bottom: 20,
            color: 'white',
            animation: 'bounce 2s infinite',
            '@keyframes bounce': {
              '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
              '40%': { transform: 'translateY(-10px)' },
              '60%': { transform: 'translateY(-5px)' },
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
          <Typography variant="h2" gutterBottom>Contenido 4</Typography>
          <Typography variant="h5" paragraph>Vive aventuras inolvidables</Typography>
          <Box sx={{ mt: 4, display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="contained" color="secondary" onClick={() => scrollToSection(section1Ref)}>Ir a Sección 1</Button>
            <Button variant="contained" color="secondary" onClick={() => scrollToSection(section2Ref)}>Ir a Sección 2</Button>
            <Button variant="contained" color="secondary" onClick={() => scrollToSection(section3Ref)}>Ir a Sección 3</Button>
          </Box>
          <Box sx={{ mt: 3, display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="outlined" sx={{ color: 'white', borderColor: 'white' }} onClick={() => navigate('/about')}>Sobre Nosotros</Button>
            <Button variant="outlined" sx={{ color: 'white', borderColor: 'white' }} onClick={() => navigate('/contact')}>Contacto</Button>
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
              '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
              '40%': { transform: 'translateY(-10px)' },
              '60%': { transform: 'translateY(-5px)' },
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