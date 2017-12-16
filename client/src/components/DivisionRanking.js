import React, { Component } from 'react';
import Preloader from './Preloader';
import { connect } from 'react-redux';
import * as actions from '../actions';

class DivisionRanking extends Component {
  componentDidMount() {
    let { match: { params } } = this.props;
    this.props.fetchDivisionWaifus(params.divisionId);
  }

  renderWaifus() {
    return this.props.divisionWaifus.map(({waifuId, waifuName, picture, currentRank, place}) => {
      return (
        <tr key={waifuId}>
          <td>{place}</td>
          <td>{waifuName}</td>
          <td>{currentRank}</td>
        </tr>
      )
    })
  }

  render() {
    if (this.props.divisionWaifus.length === 0) return <Preloader />;

    return (
      <table className='striped'>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>ELO</th>
          </tr>
        </thead>
        <tbody>
          {this.renderWaifus()}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ divisionWaifus }) {
  return { divisionWaifus };
}

export default connect(mapStateToProps, actions)(DivisionRanking);
