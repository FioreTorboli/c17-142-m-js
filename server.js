// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Sirve archivos estáticos desde el directorio 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Configura una ruta para servir el archivo index.html
app.get('/', (req, res) => {
 res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/', (req, res) => {
 res.sendFile(path.join(__dirname, 'public', 'style.css'));
   });

   // Inicia el servidor
app.listen(port, () => {
 console.log(`Servidor corriendo en http://localhost:${port}`);
});
