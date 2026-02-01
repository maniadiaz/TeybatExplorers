import { Box, Typography, Paper, TextField, Button, Grid, Container } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado');
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#A9D6E5', py: 6, px: 3 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" gutterBottom sx={{ color: '#013A63', fontWeight: 'bold' }}>
          Contacto
        </Typography>

        <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Envíanos un mensaje
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
              <TextField
                fullWidth
                label="Nombre"
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Email"
                type="email"
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Mensaje"
                multiline
                rows={4}
                margin="normal"
                required
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{ mt: 2 }}
              >
                Enviar Mensaje
              </Button>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, mb: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <EmailIcon sx={{ mr: 2, color: 'primary.main' }} />
              <Box>
                <Typography variant="h6">Email</Typography>
                <Typography variant="body2" color="text.secondary">
                  info@teybatexplorers.com
                </Typography>
              </Box>
            </Box>
          </Paper>

          <Paper sx={{ p: 3, mb: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <PhoneIcon sx={{ mr: 2, color: 'primary.main' }} />
              <Box>
                <Typography variant="h6">Teléfono</Typography>
                <Typography variant="body2" color="text.secondary">
                  +1 234 567 8900
                </Typography>
              </Box>
            </Box>
          </Paper>

          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <LocationOnIcon sx={{ mr: 2, color: 'primary.main' }} />
              <Box>
                <Typography variant="h6">Ubicación</Typography>
                <Typography variant="body2" color="text.secondary">
                  Ciudad de México, México
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      </Container>
    </Box>
  );
}

export default Contact;
