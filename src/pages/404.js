import React from 'react';
import config from '../theme-config';

export default () => {
  const pageContent = config['pages']['404']['content'].map(obj => {
    return (
      <div>
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
