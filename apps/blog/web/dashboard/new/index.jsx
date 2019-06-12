import React from 'react';
import BlogNewComponent from './component';

class BlogNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: {
        title: '',
        body: ''
      }
    };
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
    const newBlog = this.state.detail;
    if (!newBlog.title) return;
    else if (!newBlog.body) return;

    baseAPI.request({
      method: "POST",
      url: `/blog/posts`,
      data: newBlog
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
    return BlogNewComponent(props);
  }
}

export default BlogNew