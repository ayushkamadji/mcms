import React from 'react';
import BlogNewComponent from './component';

class BlogNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: {
        title: '',
        body: ''
      },
      file: '',
      imagePreviewUrl: ''
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

  onSelectImage(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file);
  }

  render() {
    const props = {
      ...this.props,
      ...this.state,
      functions: {
        setInput: this.handleInputChange.bind(this),
        onSelectImage: this.onSelectImage.bind(this),
        submitBlog: this.submitBlog.bind(this)
      }
    };
    return BlogNewComponent(props);
  }
}

export default BlogNew