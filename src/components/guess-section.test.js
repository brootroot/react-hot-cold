import React from 'react';
import { shallow, mount } from 'enzyme';

import GuessSection from './guess-section';

describe('<GuessSection />', () => {
  it('Renders without crashing.', () => {
    shallow(<GuessSection />);
  });

  it('Should display proper feedback.', () => {
    const properFeedback = 'Cold';
    const wrapper = shallow(<GuessSection feedback={properFeedback} />);
    expect(wrapper.find('#feedback').text()).toEqual(properFeedback);
  });
});
