const express = require('express');
const path = require('path');
const turnoRoutes = require('./routes/turnos');
const logger = require('./middleware/logger');

const app = express();
const PORT = 3000;

// Middleware global
app.use(express.json());
app.use(logger);

// Motor de plantillas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Rutas
app.use('/turnos', turnoRoutes);

// Ruta principal
app.get('/', (req, res) => {
  res.render('index', { title: 'Turnos-Flex', message: 'Bienvenido al sistema de gestión de turnos' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
