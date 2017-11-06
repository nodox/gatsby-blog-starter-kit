import React from 'react';
import Link from 'gatsby-link';

export default class FeaturedPost extends React.Component {

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
    } = frontmatter;

    return (
      <article className="post featured">
        <header className="major">
          <span className="date">{date}</span>
          <h2><Link to={path}>{title}</Link></h2>
          <p>{excerpt}</p>
        </header>
        <Link to={path} className="image main">
          <img src="images/pic01.jpg" alt="" />
        </Link>
        <ul className="actions">
          <li><Link to={path} className="button big">Full Story</Link></li>
        </ul>
      </article>
    );
  }
}
