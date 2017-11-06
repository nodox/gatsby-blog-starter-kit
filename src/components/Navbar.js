import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import classNames from 'classnames';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      currentPath,
      navLinks,
      config,
    } = this.props;

    const {
      pages,
      socialLinks,
    } = config;

    const links = navLinks.map((name, idx) => {
      const obj = pages[name];

      return (
        <li key={idx} className={obj.path === currentPath ? 'active' : ''}>
          <Link to={obj.path}>{obj.title}</Link>
        </li>
      );
    });

    const socialMediaLinks = socialLinks.map((obj, idx) => {
      return (
        <li key={idx}>
          <a href={obj.path} className={`icon ${obj.icon}`}>
            <span className="label">{obj.name}</span>
          </a>
        </li>
      );
    });

    return (
      <nav id="nav">
        <ul className="links">
          {links}
        </ul>
        <ul className="icons">
          {socialMediaLinks}
        </ul>
      </nav>
    );
  }
}
