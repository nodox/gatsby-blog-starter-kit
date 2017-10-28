import React from 'react';
import renderer from 'react-test-renderer';
import { NavPanel } from '../components/NavPanel';

describe('<NavPanel />', () => {
  const links = {
    paths: [
      {
        path: '/',
        title: 'Home',
      },
    ],
    socialLinks: [
      {
        path: 'https://www.twitter.com/stevennatera',
        icon: 'fa-twitter',
        name: 'Twitter',
      },
    ]
  }

  const component = shallow(
    <NavPanel navLinks={links} />
  );

  const props = component.instance().props;

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should have a the right props', () => {
    expect(props).toHaveProperty('navLinks');
  });

});
