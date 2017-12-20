import React from 'react';
import { shallow } from 'enzyme';
import Waifu from '../components/Waifu';

describe('Waifu', () => {
  let props
  let wrapper;
  const createWrapper = newProps => {
    let props = {
      name: undefined,
      picture: undefined,
      isLeft: undefined,
      ...newProps
    }
    return shallow(<Waifu {...props}/>);
  }
  beforeEach(() => {
    wrapper = createWrapper(props);
  });

  describe('rendering', () => {
    it('without props', () => {
      expect(wrapper.length).toEqual(1);
    });
  });
});
