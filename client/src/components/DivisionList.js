import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

class DivisionList extends Component {
  componentDidMount() {
    this.props.fetchDivisionList();
  }

  renderDivisions() {
    return this.props.divisionList.map(({ divisionName, divisionId }) => {
      return (
        <Link to={`/division/${divisionId}`} key={divisionId}>
          <li className='collection-item'><span className='title'>{divisionName}</span></li>
        </Link>
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
  return { divisionList };
}

export default connect(mapStateToProps, actions)(DivisionList);
