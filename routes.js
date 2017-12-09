const mongoose = require('mongoose');
const Character = mongoose.model('characters');

module.exports = app => {
  app.get('/', (req,res) => {
    res.send('hi there');
  });

  app.get('/api/battle', async (req,res) => {
    let character = await Character.aggregate(
      { $sample: { size: 2 } }
    )
    res.send(character);
  });
}
