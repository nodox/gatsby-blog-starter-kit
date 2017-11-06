import React from 'react';
import config from '../theme-config';

export default function About() {

  const pageContent = config['pages']['about']['content'].map((obj, idx) => {
    return (
      <div key={idx}>
        <header className="major">
          <h1>{obj.header}</h1>
        </header>
        <p>{obj.paragraph}</p>
      </div>
    )
  });

  return (
    <div id="main">
      <section className="post">
        {pageContent}
      </section>
    </div>
  );
}
