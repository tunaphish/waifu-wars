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
    if (this.props.data && this.props.data.loading) return <Preloader />;
    if (this.props.data.error) return <div>Error</div>;

    return (
      <div className='row'>
        <div className='col s6'>
          <a onClick={() => this.handleClick(true)}>
            <Waifu
              firstName={this.props.data.leftChar.name.first}
              lastName={this.props.data.leftChar.name.last}
              picture={this.props.data.leftChar.image.large}
              isLeft = {true}
            />
          </a>
        </div>
        <div className='col s6'>
          <a onClick={() => this.handleClick(false)}>
            <Waifu
              firstName={this.props.data.rightChar.name.first}
              lastName={this.props.data.rightChar.name.last}
              picture={this.props.data.rightChar.image.large}
            />
          </a>
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

