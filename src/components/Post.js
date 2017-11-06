import React from 'react';
import Tags from './Tags';
import Link from 'gatsby-link';

export default class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const {
      post,
      prev,
      next,
    } = this.props;

    const {
      frontmatter,
      excerpt,
      html,
    } = post;

    const {
      date,
      path,
      title,
      tags,
    } = frontmatter;

    return (
      <div id="main">
        <section className="post">
          <header className="major">
            <span className="date">{date}</span>
            <h1>{title}</h1>
            <p>{excerpt}</p>
          </header>
          <p
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <Tags list={tags || []} />
          <div className="pagination">
            {prev &&
              <Link className="previous" to={prev.frontmatter.path}>
                {prev.frontmatter.title}
              </Link>}
            {next &&
              <Link className="next" to={next.frontmatter.path}>
                {next.frontmatter.title}
              </Link>}
          </div>
        </section>
      </div>
    );
  }
}
