import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Landing extends Component {
  componentDidMount() {
    this.props.fetchBattle();
  }

  render() {
    return (
      <div>
        LANDING PAGE SON!!!!
      </div>
    )
  }
}

function mapStateToProps({ battle }) {
  console.log(battle);
  return { battle };
}

export default connect(mapStateToProps,actions)(Landing);
