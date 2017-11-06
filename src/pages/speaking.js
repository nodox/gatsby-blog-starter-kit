import React from 'react';
import config from '../theme-config';

export default function Speaking() {

  const pageContent = config['pages']['speaking']['content'].map((obj, idx) => {
    return (
      <div key={idx}>
        <header className="major">
          <h1>{obj.header}</h1>
        </header>
        <p>{obj.paragraph}</p>
      </div>
    );
  });

  return (
    <div id="main">
      <section className="post">
        {pageContent}
      </section>
    </div>
  );
}
