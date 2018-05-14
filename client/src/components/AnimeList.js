import React from 'react';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Preloader from './Preloader';


const AnimeList = (props) => {
  if (props.data && props.data.loading) return <Preloader />

  return (
    <ul>
      {
        props.data.Page.media.map( ({id,title}) => {
          return (
            <Link to={`/anime/${title.romaji}`} className="waves-effect" key={id}>
              <li><span className='title'>{title.romaji}</span></li>
            </Link>
          )
        })
      }
    </ul>
  )  
}

const ANIME_FEED_QUERY =  gql`
  query {
    Page (page: 10, perPage: 10) {
      media(
        type: ANIME, 
        sort: POPULARITY_DESC,
        season: SPRING,
        seasonYear:2018
      ) {
        id,
        title {
          romaji
          english
        }
      }
    }
  }
`;

export default graphql(ANIME_FEED_QUERY)(AnimeList);