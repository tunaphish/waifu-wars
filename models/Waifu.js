const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.model('waifu', new Schema({
    anilistId: String,
    rank: Number,
}));