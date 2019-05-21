import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class BlogMenu extends Component {
  render() {
    return (
      <Link to="/blog" style={styles.wrapper}>
        <h4 style={styles.menuTitle}>
          Blog
        </h4>
      </Link>
    )
  }
}

const styles = {
  wrapper: {
    paddingLeft: "8px"
  },
  menuTitle: {
    color: "#e4e4e4"
  }
}

export default BlogMenu
