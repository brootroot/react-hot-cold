import React from 'react';
import { shallow, mount } from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessCount />', () => {
  it('Renders without crashing.', () => {
    shallow(<GuessForm />);
  });

  it('Should call onGuess with input value and reset input value.', () => {
    const callback = jest.fn();
    const wrapper = mount(<GuessForm onGuess={callback} />);
    const value = 'test';
    wrapper.find('.text').get(0).value = value;
    wrapper.simulate('submit');
    expect(wrapper.find('.text').get(0).value).toEqual('');
    expect(callback).toHaveBeenCalledWith(value);
  });
});
