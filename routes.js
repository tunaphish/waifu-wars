const mongoose = require('mongoose');
const Waifu = mongoose.model('waifu');

module.exports = app => {
  app.get('/api/connect', async (req,res) => {
    res.send({wow: 'wow'});
  });  

  app.get('/api/waifu/:waifuId', async (req,res) => {
    const waifu = await Waifu
      .find({
        //anilistId: req.params.waifuId
      })
      .select({
        _id: true,
        rank: true,
      });
    res.send(waifu);
  })
}
