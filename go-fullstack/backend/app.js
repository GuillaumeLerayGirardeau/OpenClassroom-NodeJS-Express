// Importe le package express
const express = require('express');

// Lance la méthode express pour créer une application
const app = express();

//Utilise la méthode use qui répondra à tout type de requête
app.use((req, res) => {
  res.json({message: 'Votre requête a bien été reçue !'});
})

// Exporte l'application
module.exports = app;