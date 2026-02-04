// Importe le package express
const express = require('express');
// Importe les fonctions de la logique métier dans la variable stuffCtrl
const stuffCtrl = require('../controllers/stuff');

/*
Importe la méthode router dans la fonction routeur, permet de gérer les requêtes 
et réponses http et de les traiter dans un fichier séparé
*/
const router = express.Router();

/* 
Défini une requête POST sur la route '/' qui executera la fonction createThing
contenu dans les controllers
*/
router.post('/', stuffCtrl.createThing);

// On exporte le routeur pour qu'il puisse être importé par le fichier app
module.exports = router;