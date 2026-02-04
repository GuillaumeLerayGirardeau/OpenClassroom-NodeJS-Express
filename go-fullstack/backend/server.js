// Importe le package http natif de node pour gérer les requêtes http
const http = require('http');
// Importe notre app 
const app = require('./app');

// Défini un port d'écoute
const port = process.env.PORT || 3000;

// Spécifie de port d'écoute pour l'application
app.set('port', port);

// Lance le serveur
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Serveur lancé sur le port ${port}`);
});