import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class DivisionList extends Component {
  componentDidMount() {
    this.props.fetchDivisionList();
  }

  renderDivisions() {
    return this.props.divisionList.map(({ divisionName, divisionId }) => {
      return (
        <li className='collection-item' key={divisionId}>
          <span className='title'>{divisionName}</span>
        </li>
      )
    })
  }

  render() {
    if (this.props.divisionWaifus === 0) return <div>Loading</div>

    return (
      <ul className='collection'>
        {this.renderDivisions()}
      </ul>
    )
  }
}

function mapStateToProps({ divisionList }) {
  console.log(divisionList);
  return { divisionList };
}

export default connect(mapStateToProps, actions)(DivisionList);
