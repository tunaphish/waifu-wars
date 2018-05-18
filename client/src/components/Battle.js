import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Waifu from './Waifu.js';
import Preloader from './Preloader';
const TOTAL_WAIFUS = 63660;

class Battle extends Component {
  state = {
     leftId: Math.floor(Math.random() * TOTAL_WAIFUS),
     rightId: Math.floor(Math.random() * TOTAL_WAIFUS),
  }

  handleClick(isLeft) {
    this.setState({ leftId: Math.floor(Math.random() * TOTAL_WAIFUS), rightId: Math.floor(Math.random() * TOTAL_WAIFUS) });
    console.log(this.state.leftId + " " + this.state.rightId);
  }

  render() {
    const { data: { loading, error, leftChar, rightChar, updateQuery }} = this.props;
    if (loading) return <Preloader />;
    if (error) return <div>Error</div>;

    return (
      <div className='row'>
        <div className='col s6'>
          <a onClick={() => updateQuery()}>
            <Waifu
              firstName={leftChar.characters[0].name.first}
              lastName={leftChar.characters[0].name.last}
              picture={leftChar.characters[0].image.large}
              isLeft = {true}
            />
          </a>
        </div>
        <div className='col s6'>
          <a onClick={() => this.handleClick(false)}>
            <Waifu
              firstName={rightChar.characters[0].name.first}
              lastName={rightChar.characters[0].name.last}
              picture={rightChar.characters[0].image.large}
            />
          </a>
        </div>
      </div>
    )
  }
}

const BATTLE_QUERY = gql`
  query ($leftId: Int!, $rightId: Int!) {
    leftChar:Page(page: $leftId, perPage:1 ){
      characters {
        name {
          first
          last
        }
        image {
          large
        }
      }
    }
    rightChar:Page(page: $rightId, perPage:1 ){
      characters {
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


const leftId = Math.floor(Math.random() * TOTAL_WAIFUS);
const rightId = Math.floor(Math.random() * TOTAL_WAIFUS);

const config = {
  options: {
    variables: {
      leftId, 
      rightId
    }
  }
}

export default graphql(BATTLE_QUERY, config)(Battle)

