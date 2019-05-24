import React, { Component } from 'react'

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
    const { posts } = this.state
    if (posts) {
      return (
        <div>
          <div>Blog Dashboard</div>
          <div style={{display: "flex"}}>
            <div>Title</div>
            <div>Body</div>
            <div>Image</div>
            <div>Created At</div>
          </div>
          {posts.map( post => {
            return (
              <div key={post.id} style={{display: "flex"}}>
                <div>{post.title}</div>
                <div>{post.body}</div>
                <div>{post.image_url}</div>
                <div>{post.created_at}</div>
              </div>
            )
          })}
        </div>
      )
    }
    return <div>Blog dash no post</div>
  }
}

export default BlogDash