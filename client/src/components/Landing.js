import React, { Component } from 'react';
import Waifu from './Waifu.js';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Landing extends Component {
  componentDidMount() {
    this.props.fetchBattle(1);
  }

  handleClick = (firstWaifuWon) => {
    this.props.postBattle(firstWaifuWon, this.props.battle,1);
    this.props.fetchBattle(1);
  }

  render() {
    if (this.props.battle.length === 0) {
      return <div>Loading</div>;
    }

    return (
      <div className='row'>
        <div className='col sm12 m5'>
          <a onClick={() => this.handleClick(true)}>
            <Waifu
              name={this.props.battle[0].waifuName}
              picture={this.props.battle[0].picture}
            />
          </a>
        </div>
        <div className='col sm12 m2'>
         VS
        </div>
        <div className='col sm12 m5'>
        <a onClick={() => this.handleClick(false)}>
          <Waifu
            name={this.props.battle[1].waifuName}
            picture={this.props.battle[1].picture}
          />
        </a>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ battle }) {
  return { battle };
}

export default connect(mapStateToProps,actions)(Landing);
