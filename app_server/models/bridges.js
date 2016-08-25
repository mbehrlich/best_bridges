var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
  author_id: { type: Number, required: true, index: true},
  rating: { type: Number, required: true, min: 0, max: 5 },
  body: { type: String, required: true },
  created: { type: Date, "default": Date.now }
});

var bridgeSchema = new mongoose.Schema({
  name: {type: String, required: true, unique: true },
  bridgeType: {type: String, required: true },
  city: {type: String, required: true },
  length: {type: String, required: true },
  height: {type: String, required: true },
  rating: { type: Number, "default": 0, min: 0, max: 5 },
  image: String,
  latLng: { type: [Number], required: true, index: '2dsphere' },
  author_id: { type: Number, required: true, index: true},
  reviews: [reviewSchema]
});

mongoose.model('Bridge', bridgeSchema);
