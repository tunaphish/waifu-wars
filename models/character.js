const mongoose = require('mongoose');
const { Schema } = mongoose;

const characterSchema = new Schema({
  name: String,
  anime: String,
  rank: Number,
});

mongoose.model('characters', characterSchema);
