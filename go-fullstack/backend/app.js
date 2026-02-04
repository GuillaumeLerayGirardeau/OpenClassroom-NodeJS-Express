const express = require('express');
const mongoose = require('mongoose');
const Thing = require('./models/thing')

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

// Création d'un nouvel objet sur le modèle Thing
app.post('/api/stuff', (req, res, next) => {
  delete req.body._id;
  const thing = new Thing({
    // Utilisation de l'opérateur spread qui détaille la réponse du body 
    ...req.body
  });
  thing.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({ error }));
});

app.get('/api/stuff', (req, res, next) => {
  Thing.find()
    .then(things => res.status(200).json(things))
    .catch(error => res.status(400).json({ error }));
});

app.get('/api/stuff/:id', (req, res, next) => {
  Thing.findOne({ _id: req.params.id })
    .then(thing => res.status(200).json(thing))
    .catch(error => res.status(404).json({ error }));
});

module.exports = app;