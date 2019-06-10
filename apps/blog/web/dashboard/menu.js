import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class BlogMenu extends Component {
  render() {
    return (
      <Link to="/blog">
        Blog
      </Link>
    )
  }
}

export default BlogMenu
