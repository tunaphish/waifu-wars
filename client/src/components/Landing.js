import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Landing extends Component {
  componentDidMount() {
    this.props.fetchBattle();
  }

  render() {
    if (this.props.battle.length === 0) {
      return <div>Loading</div>;
    }

    return (
      <div className='row'>
        <div className='col sm12 m5'>
          <div className='card small'>
            <div className="card-image">
              <img src={process.env.PUBLIC_URL + '/characters/' + this.props.battle[0].picture }/>
            </div>
            <div className='card-content'>
              {this.props.battle[0].waifuName}
            </div>
          </div>
        </div>
        <div className='col sm12 m2'>
         VS
        </div>
        <div className='col sm12 m5'>
          <div className='card small'>
            <div className="card-image">
              <img src={process.env.PUBLIC_URL + '/characters/' + this.props.battle[1].picture }/>
            </div>
            <div className='card-content'>
              {this.props.battle[1].waifuName}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ battle }) {
  return { battle };
}

export default connect(mapStateToProps,actions)(Landing);
