import React from 'react';
import { FormInput, FormTextArea } from '../common/form/index';
import UploadImageIcon from './assets/icon_upload_image.png';
import styles from '../common/detail/styles.scss';

class BlogNewComponent {
  static render(props) {
    return new BlogNewComponent(props).root();
  }

  constructor(props) {
    this.props = props;
  }

  root() {
    return (
      <div className={styles.dash_wrapper}>
        {this.formNew()}
      </div>
    )
  }

  formNew() {
    const { detail, functions: { setInput } } = this.props;
    const functions = setInput;
    return (
      <form className={styles.form_blog}>
        {FormInput({ label: 'Judul', elmId: 'title', value: detail.title, functions })}
        {FormTextArea({ label: 'Konten', elmId: 'body', value: detail.body, functions })}
        {this.previewImage()}
        {this.buttonSave()}
      </form>
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

  buttonSave() {
    const { functions: { submitBlog, onSelectImage } } = this.props;
    return (
      <div className={styles.save_post}>
        <button onClick={submitBlog}>Simpan</button>
        <input className={styles.upload_img} type="file" name="newImage" onChange= {onSelectImage} />
      </div>
    );
  }
}

export default BlogNewComponent.render;
