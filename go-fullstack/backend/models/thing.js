const mongoose = require('mongoose');

// Création d'un modèle (Schema) de données pour les objets Thing
const thingSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  userId: { type: String, required: true },
  price: { type: Number, required: true },
});

// Export du modèle thingSchema sous le nom Thing
module.exports = mongoose.model('Thing', thingSchema);