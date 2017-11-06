import React from 'react';
import renderer from 'react-test-renderer';
import Navbar from '../components/Navbar';
import config from '../theme-config';

describe('<Navbar />', () => {
  const navLinks = [];
  const currentPath = '/hello';

  const component = shallow(
    <Navbar
      navLinks={navLinks}
      config={config}
      currentPath={currentPath} />
  );

  const props = component.instance().props;

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should have the right props', () => {
    expect(props).toHaveProperty('config');
    expect(props).toHaveProperty('config.pages');
    expect(props).toHaveProperty('config.socialLinks');
    expect(props).toHaveProperty('navLinks');
    expect(props).toHaveProperty('currentPath');
  });

});
