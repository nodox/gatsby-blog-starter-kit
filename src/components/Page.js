import React from 'react';

export default class Page extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      title,
      desc
    } = this.props;

    return (
      <div id="main">
        <section className="post">
          <header className="major">
            <h1>{title}</h1>
          </header>
          <div className="image main"><img src="images/pic01.jpg" alt=""/></div>
          <p>{desc}</p>
        </section>
      </div>
    );
  }

}
