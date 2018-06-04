import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Preloader from './Preloader';
import { Spring } from 'react-spring';

class Waifu extends Component {
  render() {
    const { data: { loading, error, Page }} = this.props;
    if (loading) return <Preloader />;
    if (error) return <div>Error</div>;

    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
      >
        {styles => <div
            className={ (this.props.isLeft ? 'left-waifu ' : 'right-waifu ') + 'card large waifu-card'}
            style={{
              backgroundImage: `url(${Page.characters[0].image.large})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'contain',
              ...styles
            }}
          >        
            {Page.characters[0].name.first + (Page.characters[0].name.last !== null ? " " + Page.characters[0].name.last : "")}
          </div>
        }
      </Spring>
    )
  }
} 

const WAIFU_QUERY = gql`
  query ($id: Int!) {
    Page(page: $id, perPage:1 ){
      characters {
        id
        name {
          first
          last
        }
        image {
          large
        }
      }
    }    
  }
`;

const config = {
  options: ({ id }) => ({
    variables: {
      id, 
    }
  })
}

export default graphql(WAIFU_QUERY, config)(Waifu)
