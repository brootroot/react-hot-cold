import React from 'react';
import { shallow, mount } from 'enzyme';

import Header from './header';

describe('<Header />', () => {
  it('Renders without crashing.', () => {
    shallow(<Header />);
  });

  it('Should render without and InfoModal by default.', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.state('showInfoModal')).toEqual(false);
  });

  it('Should render an InfoModal when toggleInfoModal is called.', () => {
    const wrapper = shallow(<Header />);
    wrapper.instance().toggleInfoModal();
    wrapper.update();
    expect(wrapper.state('showInfoModal')).toEqual(true);
  });
});
