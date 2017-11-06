import React from 'react';
import Link from 'gatsby-link';

export default class PreviewPost extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {
      post,
    } = this.props;

    const {
      frontmatter,
      excerpt,
    } = post;

    const {
      date,
      path,
      title,
      tags,
    } = frontmatter;

    return (
      <article>
        <header>
          <span className="date">{date}</span>
          <h2>
            <Link to={path}>
              {title}
            </Link>
          </h2>
        </header>
        <p>
          {excerpt}
        </p>
        <ul className="actions">
          <li>
            <Link to={path} className="button">Full Story</Link>
          </li>
        </ul>
      </article>
    );
  }
}
