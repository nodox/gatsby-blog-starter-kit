import React from 'react';
import renderer from 'react-test-renderer';
import NavPanel from '../components/NavPanel';
import config from '../theme-config';

describe('<NavPanel />', () => {
  const closePanel = () => {};
  const navLinks = [];
  const component = shallow(
    <NavPanel
      navLinks={navLinks}
      closePanel={closePanel}
      config={config} />
  );

  const props = component.instance().props;

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should have the right props', () => {
    expect(props).toHaveProperty('config');
    expect(props).toHaveProperty('closePanel');
    expect(props).toHaveProperty('navLinks');

    expect(props).toHaveProperty('config.pages');
    expect(props).toHaveProperty('config.socialLinks');
  });

});
