import React, { Component } from 'react';
import DivisionList from './DivisionList';

class Sider extends Component {
  componentDidMount() {
    const $ = window.$;
    $(".division-list-button").sideNav({
      draggable: true,
    });
  };

  render() {
    return (
      <div>
        <ul id="slide-out" className="side-nav">
          <li><a className="subheader">Division list</a></li>
          <DivisionList />
        </ul>
        <a data-activates="slide-out" className="division-list-button">
          <i className="fa fa-bars" aria-hidden="true" />
        </a>
      </div>
    )
  }
}

export default Sider;
