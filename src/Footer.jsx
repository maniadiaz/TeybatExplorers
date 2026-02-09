import { Box, Container, Typography, Grid, Link } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#2c3e50',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              SOPORTE OPERATIVO
            </Typography>
            <Typography variant="body2">
              Descripción breve de tu empresa
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Enlaces
            </Typography>
            <Link href="#" color="inherit" display="block">Inicio</Link>
            <Link href="#" color="inherit" display="block">Servicios</Link>
            <Link href="#" color="inherit" display="block">Contacto</Link>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contacto
            </Typography>
            <Typography variant="body2">
              Email: info@ejemplo.com
            </Typography>
            <Typography variant="body2">
              Tel: +52 123 456 7890
            </Typography>
          </Grid>
        </Grid>
        
        <Typography variant="body2" align="center" sx={{ mt: 4 }}>
          © {new Date().getFullYear()} Soporte Operativo. Todos los derechos reservados.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;