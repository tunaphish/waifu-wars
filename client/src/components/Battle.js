import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Waifu from './Waifu.js';
import Preloader from './Preloader';

class Battle extends Component {
  handleClick(isLeft) {

  }

  render() {
    if (this.props.data && this.props.data.loading) return <Preloader />;

    return (
      <div>
        <div className='row'>
          <div className='col s6'>
            <a onClick={() => this.handleClick(true)}>
              <Waifu
                name={this.props.data.leftChar.name.first + this.props.data.leftChar.name.last}
                picture={this.props.data.leftChar.image.large}
                isLeft = {true}
              />
            </a>
          </div>
          <div className='col s6'>
            <a onClick={() => this.handleClick(false)}>
              <Waifu
                name={this.props.data.rightChar.name.first + this.props.data.leftChar.name.last}
                picture={this.props.data.rightChar.image.large}
              />
            </a>
          </div>
        </div>
        <div className='choose-text'>
          CHOOSE YOUR WAIFU
        </div>
      </div>
    )
  }
}

const BATTLE_QUERY = gql`
  query ($leftId: Int!, $rightId: Int!) {
    leftChar:Character(id: $leftId) {
      name {
        first
        last
      }
      image {
        large
      }
    }
    rightChar:Character(id: $rightId) {
      name {
        first
        last
      }
      image {
        large
      }
    }
  }
`;

const TOTAL_WAIFUS = 63660;
const config = {
  options: {
    variables: {
      leftId: 1,//Math.floor(Math.random() * TOTAL_WAIFUS),
      rightId: 2//Math.floor(Math.random() * TOTAL_WAIFUS),
    }
  }
}

export default graphql(BATTLE_QUERY, config)(Battle)

