import React, { Component } from 'react';
import AnimeList from './AnimeList';

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
          <li><a className="subheader">Anime list</a></li>
          <AnimeList />
        </ul>
        <a data-activates="slide-out" className="division-list-button">
          <i className="fa fa-bars" aria-hidden="true" />
        </a>
      </div>
    )
  }
}

export default Sider;
