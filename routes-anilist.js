const { createApolloFetch } = require('apollo-fetch');
const fetch = createApolloFetch({
  uri: 'https://graphql.anilist.co',
});


let variables = {
    page: 1,
    perPage: 10
};

const animeRankQuery = `
query ($search: String) {
  Media(search: $search) {
    characters (role: MAIN){
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
      nodes {     
        name {
          first
          last
          native
        }
        image {
          large
        }
        siteUrl
      }      
    }
  }
}
`;

module.exports = (app,db) => { 
  app.get('/api2/anime/:animeName/rank', async (req, res) => {
    variables.search = req.params.animeName;
    res.send(await fetch ({ query: animeRankQuery, variables }));
  });
}
