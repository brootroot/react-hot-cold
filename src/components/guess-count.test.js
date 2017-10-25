import React from 'react';
import { shallow, mount } from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', () => {
  it('Renders without crashing.', () => {
    shallow(<GuessCount />);
  });

  it('Should render with correct guesses.', () => {
    const guessNumber = 4;
    const wrapper = shallow(<GuessCount count={guessNumber} />);
    expect(wrapper.text()).toEqual(`Guess #${guessNumber}!`);
  });
});
