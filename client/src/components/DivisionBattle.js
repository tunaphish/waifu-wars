import React, { Component } from 'react';
import Waifu from './Waifu.js';
import Preloader from './Preloader';
import { connect } from 'react-redux';
import * as actions from '../actions';

class DivisionBattle extends Component {
  constructor(props) {
    super(props);
    let { match: { params } } = this.props;
    const divisionId = params.divisionId || 1;
    this.state = { divisionId };
  }

  componentDidMount() {
    this.props.fetchBattle(this.state.divisionId);
  }
  componentWillUnmount(){
    this.props.clearBattle();
  }

  handleClick = async (firstWaifuWon) => {
    await this.props.postBattle(firstWaifuWon, this.props.battle, this.state.divisionId);
    await this.props.fetchBattle(this.state.divisionId);
  }

  render() {
    if (this.props.battle.length === 0) return <Preloader />;

    return (
      <div className='row'>
        <div className='col s12 m6'>
          <a onClick={() => this.handleClick(true)}>
            <Waifu
              name={this.props.battle[0].waifuName}
              picture={this.props.battle[0].picture}
            />
          </a>
        </div>
        <div className='col s12 m6'>
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

export default connect(mapStateToProps,actions)(DivisionBattle);
