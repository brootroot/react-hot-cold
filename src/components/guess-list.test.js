import React from 'react';
import { shallow, mount } from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', () => {
  it('Renders without crashing.', () => {
    shallow(<GuessList guesses={[]} />);
  });

  it('Should render the guesses correctly.', () => {
    const wrapper = shallow(<GuessList guesses={[45, 67, 56]} />);
    expect(wrapper.text()).toEqual('456756');
  });
});
