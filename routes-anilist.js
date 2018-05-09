module.exports = (app,db) => {
  
  app.get('/graphql', async (req,res) => {
    const { createApolloFetch } = require('apollo-fetch');
    const fetch = createApolloFetch({
      uri: 'https://graphql.anilist.co',
    });

    const query = `
        query ($id: Int) { 
          Media (id: $id, type: ANIME) {
            id
            title {
              romaji
              english
              native
            }
          }
        }
      `
    const variables = {
      id: 15125
    };

    res.send(await fetch ({
      query,
      variables
    }));
  });
}
