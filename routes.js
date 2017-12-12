module.exports = (app,db) => {
  app.get('/', (req,res) => {
    res.send('hi there');
  });

  app.get('/api/battle', async (req,res) => {
    const [rows, fields] = await db.execute('SELECT * FROM user');
    res.send(rows);
  });
}
