import React from 'react';
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
      <div className={styles.add_image}>Add images</div>
    );
  }

  galleryList() {
    const { galleries } = this.props;
    return (
      <div className={styles.gallery_list}>
        {galleries.map(gallery => this.galleryItem(gallery.file))}
      </div>
    );
  }

  galleryItem(gallery) {
    return (
      <div className={styles.gallery_item}>
        <img src={`/public/assets/${gallery}`} />
        <div className={styles.delete_section}>
          <button />
        </div>
      </div>
    );
  }
}

export default GalleryComponent.render;
