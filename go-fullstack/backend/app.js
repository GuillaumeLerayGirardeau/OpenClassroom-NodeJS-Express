const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://Guillaume:MongoDBcluster137@mycluster.a8kns57.mongodb.net/?appName=MyCluster')
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((error) => console.log( error ));

app.use(express.json());

/* 
Spécification des headers pour permettre de communiquer entre différents serveurs
et éviter les erreurs CORS. Ils permettent :
- d'accéder à notre API depuis n'importe quelle origine ( '*' ) ;
- d'ajouter les headers mentionnés aux requêtes envoyées vers notre API (Origin , X-Requested-With , etc.) ;
- d'envoyer des requêtes avec les méthodes mentionnées ( GET ,POST , etc.).
*/
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

module.exports = app;