import React from 'react';
import Link from 'gatsby-link';

export default class MenuButton extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { openPanel } = this.props;

    return (
      <span
        id="navPanelToggle"
        className="alt"
        onClick={() => openPanel()}>Menu</span>
    );
  }
}
