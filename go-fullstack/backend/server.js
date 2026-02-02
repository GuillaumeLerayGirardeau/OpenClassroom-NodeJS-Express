// Importe le package http natif de Node pour pouvoir gérer les requetes http
const http = require('http');

/*
Crée un serveur avec la méthode du module http
Il prend comme argument une fonction qui sera executée à chaque requête 
recu par le serveur
Cette fonction prend deux arguments : la requête et la réponse
*/
const server = http.createServer((req, res) => {
  // réponse envoyé avec la méthode end
  res.end('Voila la réponse du serveur !');
});

/* 
Spécifie le port d'écoute du serveur
process.env.PORT prend le port d'écoute envoyé par l'environnement, sinon
prend le port 3000 par défaut
*/
server.listen(process.env.PORT || 3000);