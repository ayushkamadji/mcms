import React from 'react';
import GalleryComponent from './component';
import imagesJson from './images.json';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      galleries: imagesJson,
      file: '',
      imagePreviewUrl: ''
    };
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

      // after uploaded, move it latter
      this.uploadImage({
        id: 99,
        name: '',
        file: reader.result
      });
    }

    reader.readAsDataURL(file);
  }

  uploadImage(newImage) {
    console.log('uploading image...')
    const newGallery = [newImage].concat(this.state.galleries)
    setTimeout(
      () => this.setState({ galleries: newGallery, file: '', imagePreviewUrl: '' }),
      1000
    );

  }

  deleteImage(gallery) {
    const { galleries } = this.state;
    const { id, name } = gallery;
    const confirmDelete = confirm(`Hapus ${name}?`);
    if (confirmDelete) {
      console.log(`do delete ${id}`);
      const restGalleries = galleries.filter(objGallery => objGallery.id !== gallery.id);
      this.setState({ galleries: restGalleries })
    }
  }

  render() {
    const props = {
      ...this.props,
      ...this.state,
      onSelectImage: this.onSelectImage.bind(this),
      deleteImage: this.deleteImage.bind(this)
    };
    return GalleryComponent(props);
  }
}

export default Gallery;
