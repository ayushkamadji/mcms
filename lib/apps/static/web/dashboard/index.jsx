import React from 'react';
import GalleryComponent from './component';
import imagesJson from './images.json';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      galleries: imagesJson
    };
  }

  render() {
    const props = {
      ...this.props,
      galleries: this.state.galleries
    };
    return GalleryComponent(props);
  }
}

export default Gallery;
