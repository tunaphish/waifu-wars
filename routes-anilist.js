const { createApolloFetch } = require('apollo-fetch');
const fetch = createApolloFetch({
  uri: 'https://graphql.anilist.co',
});

const animeListQuery = `
query ($page: Int, $perPage: Int) {
  Page (page: $page, perPage: $perPage) {
    media(
      type: ANIME, 
      sort: POPULARITY_DESC,
      season: SPRING,
      seasonYear:2018
    ) {
      title {
        romaji
        english
      }
    }
  }
}
`;
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
  app.get('/api2/anime/list', async (req,res) => {
    res.send(await fetch ({ query: animeListQuery, variables }));
  });  

  app.get('/api2/anime/:animeName/rank', async (req, res) => {
    variables.search = req.params.animeName;
    res.send(await fetch ({ query: animeRankQuery, variables }));
  });
}
