import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Preloader from './Preloader';
import { connect } from 'react-redux';
import * as actions from '../actions';

class DivisionList extends Component {
  componentDidMount() {
    this.props.fetchDivisionList();
  }

  renderDivisions() {
    return this.props.divisionList.map(({ divisionName, divisionId }) => {
      return (
        <Link to={`/division/${divisionId}/battle`} className="waves-effect" key={divisionId}>
          <li><span className='title'>{divisionName}</span></li>
        </Link>
      )
    })
  }

  render() {
    if (this.props.divisionList.length === 0) return <Preloader />

    return (
      <ul>
        {this.renderDivisions()}
      </ul>
    )
  }
}

function mapStateToProps({ divisionList }) {
  return { divisionList };
}

export default connect(mapStateToProps, actions)(DivisionList);
