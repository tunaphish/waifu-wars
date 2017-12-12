const divisionListQuery = `SELECT *
  FROM division;`;
const divisionRankingQuery = `SELECT waifuName, currentRank
  FROM divisionWaifus dw, waifu w
  WHERE dw.divisionId = ?
  AND dw.waifuId = w.waifuId
  ORDER BY currentRank DESC;`;
const battleQuery = `SELECT *
  FROM waifu w, divisionWaifus dw
  WHERE dw.divisionId = ?
  AND w.waifuId = dw.waifuId
  ORDER BY RAND()
  LIMIT 2;`;


module.exports = (app,db) => {
  app.get('/api/division/list', async (req,res) => {
    const [rows, fields] = await db.execute(divisionListQuery);
    res.send(rows);
  });

  app.get('/api/division/:divisionId/ranking', async (req,res) => {
    const [rows, fields] = await db.execute(divisionRankingQuery, [req.params.divisionId]);
    res.send(rows);
  });

  app.get('/api/division/:divisionId/battle', async (req,res) => {
    const [rows, fields] = await db.execute(battleQuery, [req.params.divisionId]);
    res.send(rows);
  });
}
