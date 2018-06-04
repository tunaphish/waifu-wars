import React, { Component } from 'react';
import Waifu from './Waifu.js';

const TOTAL_WAIFUS = 63660;

export default class extends Component {
  state = {
    leftId: Math.floor(Math.random() * TOTAL_WAIFUS),
    rightId: Math.floor(Math.random() * TOTAL_WAIFUS),
  }

  handleClick() {
    this.setState({
      leftId: Math.floor(Math.random() * TOTAL_WAIFUS),
      rightId: Math.floor(Math.random() * TOTAL_WAIFUS),
    })
  }

  render() {
    return (
      <div>
        <div className='row'>
          <div className='col s6'>
            <a onClick = {() => this.handleClick()}>
              <Waifu key={this.state.leftId} id={this.state.leftId} isLeft={true}/>
            </a>
          </div>
          <div className='col s6'>
            <a onClick = {() => this.handleClick()}>
              <Waifu key={this.state.rightId} id={this.state.rightId}/>
            </a>
          </div>
        </div>
        <div className='choose-text'>
          CHOOSE YOUR WAIFU
        </div>
      </div>
    )  
  }
}