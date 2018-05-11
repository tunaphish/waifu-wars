const divisionListQuery = `SELECT *
  FROM division;`;
const divisionRankingQuery = `SELECT waifuName, currentRank, picture, w.waifuId,
  IF(currentRank=@_last_rank,@curPlace:=@curPlace,@curPlace:=@_sequence) AS place,
  @_sequence:=@_sequence+1,@_last_rank:=currentRank
  FROM divisionWaifus dw, waifu w, (SELECT @curPlace := 1, @_sequence:=1, @_last_rank:=0) r
  WHERE dw.divisionId = ?
  AND dw.waifuId = w.waifuId
  ORDER BY currentRank DESC;`;
const battleQuery = `SELECT *
  FROM waifu w, divisionWaifus dw
  WHERE dw.divisionId = ?
  AND w.waifuId = dw.waifuId
  ORDER BY RAND()
  LIMIT 2;`;
const updateRankQuery = `UPDATE divisionWaifus
  SET currentRank = ?
  WHERE divisionWaifus.divisionWaifuId = ?;`;
const waifuQuery = `SELECT rank, divisionId
  FROM waifu w, divisionWaifus dw, rankLog r
  WHERE w.waifuId = ?
  AND w.waifuId = dw.waifuId
  AND r.divisionWaifuId = dw.divisionWaifuId
  ORDER BY divisionId DESC, date DESC;`;

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

  app.post('/api/division/:divisionId/battle', async (req,res) => {
    const { winner, loser } = req.body;

    const kFactor = 32;
    const winnerExpected = 1/(1 + Math.pow(10,(loser.currentRank - winner.currentRank)/400));
    const loserExpected = 1 - winnerExpected;
    const winnerNewScore = winner.currentRank + kFactor * (1 - winnerExpected);
    const loserNewScore = loser.currentRank + kFactor * (0 - loserExpected);

    await db.execute(updateRankQuery, [winnerNewScore, winner.divisionWaifuId]);
    await db.execute(updateRankQuery, [loserNewScore, loser.divisionWaifuId]);

    res.send('updated');
  });
}
