import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Preloader from './Preloader';
import { Transition } from 'react-transition-group';
import anime from 'animejs';

const animation = domObject => anime({
  targets: domObject,
  rotate: 360,
  duration: 1000
});

class Waifu extends Component {
  componentDidMount() {
    console.log("mount")
  }
  componentWillUpdate() {
    console.log("update")
  }

  render() {
    const { data: { loading, error, Page }} = this.props;
    if (loading) return <Preloader />;
    if (error) return <div>Error</div>;

    return (
      <Transition
        appear
        onEntering={animation}
        onExiting={animation}
        in={true}
        timeout={1000}
      >
        <div
          className={ (this.props.isLeft ? 'left-waifu ' : 'right-waifu ') + 'card large waifu-card'}
          style={{
            backgroundImage: `url(${Page.characters[0].image.large})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
          }}
        >
          {Page.characters[0].name.first + (Page.characters[0].name.last !== null ? " " + Page.characters[0].name.last : "")}
        </div>
      </Transition>
    )
  }
} 

const WAIFU_QUERY = gql`
  query ($id: Int!) {
    Page(page: $id, perPage:1 ){
      characters {
        name {
          first
          last
        }
        image {
          large
        }
      }
    }    
  }
`;

const config = {
  options: ({ id }) => ({
    variables: {
      id, 
    }
  })
}

export default graphql(WAIFU_QUERY, config)(Waifu)
