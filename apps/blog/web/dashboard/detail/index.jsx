import React, { Component } from 'react';
import BlogDetailComponent from './component';

class BlogDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: ''
    };
  }

  componentDidMount() {
    const { baseAPI } = this.props;
    const blogId = 2;
    baseAPI.request({
      method: "GET",
      url: `/blog/posts/${blogId}`
    })
    .then( response => response.data )
    .then( data => this.setState({
      detail: data
    }))
  }

  handleInputChange = (e) => {
    this.setState({
      detail: {
        ...this.state.detail,
        [e.target.name]: e.target.value
      }
    });
  }

  submitBlog = (e) => {
    e.preventDefault();
    const { baseAPI } = this.props;
    const editedBlog = this.state.detail;
    const blogId = 2;

    baseAPI.request({
      method: "PATCH",
      url: `/blog/posts/${blogId}`,
      data: editedBlog
    })
    .then( response => response.data );
    // TODO: create success flash message
  }

  render() {
    const { detail } = this.state;
    const props = {
      ...this.props,
      detail,
      functions: {
        setInput: this.handleInputChange.bind(this),
        submitBlog: this.submitBlog.bind(this)
      }
    };
    if (detail) {
      return BlogDetailComponent(props);
    }
    return null;
  }
}

export default BlogDetail