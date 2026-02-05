import { Box, Container, Typography, Button, Grid, Card, CardContent, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState } from 'react';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensaje enviado! (Esta es una demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Box sx={{ pt: 10, pb: 6, minHeight: '100vh', background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6, color: 'white' }}>
          <Typography variant="h2" gutterBottom fontWeight="bold">
            Contáctanos
          </Typography>
          <Typography variant="h5" paragraph>
            Estamos aquí para ayudarte
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.95)', textAlign: 'center' }}>
              <CardContent sx={{ p: 4 }}>
                <EmailIcon sx={{ fontSize: 50, color: '#4facfe', mb: 2 }} />
                <Typography variant="h6" gutterBottom fontWeight="bold">
                  Email
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  info@teybatexplorers.com
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  reservas@teybatexplorers.com
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.95)', textAlign: 'center' }}>
              <CardContent sx={{ p: 4 }}>
                <PhoneIcon sx={{ fontSize: 50, color: '#00f2fe', mb: 2 }} />
                <Typography variant="h6" gutterBottom fontWeight="bold">
                  Teléfono
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  +123 456 7890
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lun - Vie: 9:00 AM - 6:00 PM
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.95)', textAlign: 'center' }}>
              <CardContent sx={{ p: 4 }}>
                <LocationOnIcon sx={{ fontSize: 50, color: '#667eea', mb: 2 }} />
                <Typography variant="h6" gutterBottom fontWeight="bold">
                  Ubicación
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Calle Principal 123
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Ciudad, País
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box sx={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', borderRadius: 2, p: 4, mb: 4 }}>
          <Typography variant="h4" gutterBottom fontWeight="bold" color="primary" sx={{ mb: 3 }}>
            Envíanos un Mensaje
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Nombre"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Mensaje"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  multiline
                  rows={4}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <Button 
                  type="submit" 
                  variant="contained" 
                  size="large"
                  sx={{
                    backgroundColor: '#4facfe',
                    '&:hover': {
                      backgroundColor: '#00f2fe',
                    }
                  }}
                >
                  Enviar Mensaje
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>

        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button 
            variant="contained" 
            size="large" 
            onClick={() => navigate('/')}
            sx={{ 
              mr: 2,
              backgroundColor: 'white',
              color: '#4facfe',
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
            onClick={() => navigate('/about')}
            sx={{ 
              borderColor: 'white',
              color: 'white',
              '&:hover': {
                borderColor: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }
            }}
          >
            Sobre Nosotros
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
