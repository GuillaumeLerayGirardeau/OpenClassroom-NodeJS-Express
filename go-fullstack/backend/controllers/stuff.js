// Importe le modèle de base de données dans la variable Thing
const Thing = require('../models/thing');

// crée une fonction exportable permettant de créer un nouvel objet
exports.createThing = (req, res, next) => {
  // Crée le nouvel objet suivant le modèle de base de données
  const thing = new Thing({
    title: req.body.title,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    price: req.body.price,
    userId: req.body.userId
  });
  // Enregstre le nouvel objet dans la base de données
  thing.save().then(
    () => {
      res.status(201).json({
        message: 'Post saved successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};