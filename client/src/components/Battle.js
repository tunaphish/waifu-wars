import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Waifu from './Waifu.js';
import Preloader from './Preloader';

class Battle extends Component {
  
  TOTAL_WAIFUS = 63660;

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
  query {
    leftChar:Character(id: 1) {
      name {
        first
        last
      }
      image {
        large
      }
    }
    rightChar:Character(id: 5) {
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

export default graphql(BATTLE_QUERY)(Battle)

