import React from 'react';
import Link from 'gatsby-link';

export default class Background extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="bg fixed" style={{ transform: 'none'}}></div>
    );
  }
}
