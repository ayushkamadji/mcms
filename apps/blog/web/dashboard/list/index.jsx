import React, { Component } from 'react'
import BlogList from './component';

export class BlogDash extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    const { baseAPI } = this.props
    // baseAPI is an axios client with base url configured 
    // https://github.com/axios/axios#instance-methods
    baseAPI.request({
      method: "GET",
      url: "/blog/posts"
    })
    .then( response => response.data )
    .then( data => this.setState({
      posts: data
    }))
  }

  render() {
    const { posts } = this.state;
    const props = {
      ...this.props,
      posts
    };
    if (posts) {
      return BlogList(props);
    }
    return <div>Blog dash no post</div>
  }
}

export default BlogDash