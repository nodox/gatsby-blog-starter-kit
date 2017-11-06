import React from 'react';
import Link from 'gatsby-link';

export default class NavPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      config,
      closePanel,
      navLinks,
    } = this.props;

    const {
      pages,
      socialLinks,
    } = config;

    const links = navLinks.map((name, idx) => {
      const obj = pages[name];
      return (
        <li key={idx}>
          <Link to={obj.path} onClick={() => closePanel() }>{obj.title}</Link>
        </li>
      );
    });

    const socialMediaLinks = socialLinks.map((obj, idx) => {
      return (
        <li key={idx}>
          <a href={obj.path} className={`icon ${obj.icon} alt`}><span className="label">{obj.name}</span></a>
        </li>
      );
    });

    return (
      <div id="navPanel">
        <nav>
          <ul className="links">
            {links}
          </ul>
          <ul className="icons alt">
            {socialMediaLinks}
          </ul>
        </nav>
        <span id="navPanelCloseBtn"
        className="close"
        onClick={() => closePanel() }><i className="fa fa-times" aria-hidden="true"></i></span>
      </div>
    );
  }
}
