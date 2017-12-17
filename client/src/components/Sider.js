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
          <li><div className="divider"></div></li>
          <li><a className="subheader">Subheader</a></li>
          <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
          <li><div className="divider"></div></li>
          <li><a className="subheader">Division list</a></li>
          <DivisionList />
        </ul>
        <a href="#" data-activates="slide-out" className="division-list-button">
          <i className="fa fa-bars" aria-hidden="true" />
        </a>
      </div>
    )
  }
}

export default Sider;
