import React from 'react';
import renderer from 'react-test-renderer';
import Intro from '../components/Intro';
import config from '../theme-config';

describe('<Intro />', () => {
  const currentPath = '/hello';
  const component = renderer.create(
    <Intro
      config={config}
      currentPath={currentPath} />
  );

  const props = component.getInstance().props;

  it('should render correctly', () => {
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should have the right props', () => {
    expect(props).toHaveProperty('config.name');
    expect(props).toHaveProperty('config.pages');
    expect(props).toHaveProperty('currentPath');
  });

});
