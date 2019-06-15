import React from 'react';
import AddImageIcon from './assets/icon_addimage.png';
import styles from './styles.scss';

class GalleryComponent {
  static render(props) {
    return new GalleryComponent(props).root();
  }

  constructor(props) {
    this.props = props;
  }

  root() {
    return (
      <div className={styles.gallery_wrapper}>
        {this.addImage()}
        {this.galleryList()}
      </div>
    )
  }

  addImage() {
    return (
      <div className={styles.add_image}>
        {this.buttonUpload()}
        {this.previewImage()}
      </div>
    );
  }

  buttonUpload() {
    const { onSelectImage, imagePreviewUrl } = this.props;
    if (imagePreviewUrl) return null;
    return (
      <input
        type="file"
        name="newImage"
        onChange= {onSelectImage}
      />
    );
  }

  previewImage() {
    const { imagePreviewUrl } = this.props;
    if (!imagePreviewUrl) return null;
    return (
      <div className={styles.preview_image}>
        <img src={imagePreviewUrl} />
      </div>
    );
  }

  galleryList() {
    const { galleries } = this.props;
    return (
      <div className={styles.gallery_list}>
        {galleries.map(gallery => this.galleryItem(gallery))}
      </div>
    );
  }

  galleryItem(gallery) {
    const { deleteImage } = this.props;
    return (
      <div className={styles.gallery_item}>
        <img src={`/public/assets/${gallery.file}`} />
        <div className={styles.delete_section}>
          <button onClick={() => deleteImage(gallery)} />
        </div>
      </div>
    );
  }
}

export default GalleryComponent.render;
