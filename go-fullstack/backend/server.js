// Importe le package http natif de Node pour pouvoir gérer les requetes http
const http = require('http');
// Importe l'application du fichier app
const app = require('./app');

// Défini un port d'écoute
const port = process.env.PORT || 3000

// Défini un port d'écoute pour l'application et l'engeriste avec la clé 'port'
app.set('port', port)
/*
Crée un serveur avec la méthode du module http
Il prend comme argument notre fonction app, qui va gére rles requêtes et les
réponses
*/
const server = http.createServer(app);

/* 
Spécifie le port d'écoute du serveur avec un message dans la console
process.env.PORT prend le port d'écoute envoyé par l'environnement, sinon
prend le port 3000 par défaut
*/
server.listen(port, () => {
  console.log(`Server launched on port ${port}`);
});