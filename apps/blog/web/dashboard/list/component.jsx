import { Link } from 'react-router-dom'
import React from 'react';
import styles from './styles.scss';

class DashboardComponent {
  static render(props) {
    return new DashboardComponent(props).root();
  }

  constructor(props) {
    this.props = props;
  }

  root() {
    return (
      <div className={styles.dash_wrapper}>
        {this.newPost()}
        {this.blogs()}
      </div>
    )
  }

  newPost() {
    return (
      <div className={styles.new_post}>
        <button>New Post</button>
      </div>
    );
  }

  blogs() {
    const { posts } = this.props;
    return (
      <div>
        {posts.map( post => this.blogItem(post) )}
      </div>
    );
  }

  blogItem(post) {
    const created = post.created_at;
    return (
      <div className={styles.blog_item} key={`blog-${post.id}`}>
        <Link to={`/blog/${post.id}`}>
          <h3>{post.title}</h3>
          <div className={styles.shorted_body}>{`${post.body.substring(0, 150)} ...`}</div>
          <div className={styles.published}>{`Published on ${created}`}</div>
        </Link>
      </div>
    );
  }
}

export default DashboardComponent.render;
