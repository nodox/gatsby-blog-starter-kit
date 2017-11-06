import React from 'react';
import PropTypes from 'prop-types';

export default class Intro extends React.Component {
  constructor(props) {
    super(props)
  }

  getDescription(currentPath, pages) {
    for (var key in pages) {
      if (currentPath === pages[key]['path']) {
        return pages[key].introText;
      }
    }
    return '';
  }

  render() {
    const {
      currentPath,
      config,
    } = this.props;

    const {
      name,
      pages,
    } = config;

    const description = this.getDescription(currentPath, pages);

    return (
      <div id="intro" className="">
        <div className="img-container">
          <div className="img-size-sm img-intro img-circle"></div>
        </div>
        <h1>{name}</h1>
        <p>{description}</p>
        <ul className="actions">
          <li>
            <a href="#header" className="button icon solo fa-arrow-down scrolly">Continue</a>
          </li>
        </ul>
      </div>
    );
  }
}
