import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class DivisionRanking extends Component {
  componentDidMount() {
    let { match: { params } } = this.props;
    this.props.fetchDivisionWaifus(params.divisionId);
  }

  renderWaifus() {
    return this.props.divisionWaifus.map(({waifuId, waifuName, picture, currentRank}) => {
      return (
        <li className='collection-item' key={waifuId}>
          <span className='title'>{waifuName}</span>
          <div className='secondary-content'>{currentRank}</div>
        </li>
      )
    })
  }

  render() {
    if (this.props.divisionWaifus === 0) return <div>Loading</div>

    return (
      <ul className='collection'>
        {this.renderWaifus()}
      </ul>
    )
  }
}

function mapStateToProps({ divisionWaifus }) {
  return { divisionWaifus };
}

export default connect(mapStateToProps, actions)(DivisionRanking);
