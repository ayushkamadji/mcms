import { Link } from 'react-router-dom'
import React from 'react';
import { FormInput, FormTextArea } from '../common/form/index';
import styles from './styles.scss';

class DashboardComponent {
  static render(props) {
    return new DashboardComponent(props).root();
  }

  constructor(props) {
    this.props = props;
  }

  root() {
    return (
      <div className={styles.dash_wrapper}>
        {this.formItem()}
      </div>
    )
  }

  formItem() {
    const { detail, functions: { setInput } } = this.props;
    const functions = setInput;
    return (
      <form className={styles.form_blog}>
        {FormInput({ label: 'Judul', elmId: 'title', value: detail.title, functions })}
        {FormTextArea({ label: 'Konten', elmId: 'body', value: detail.body, functions })}
        {this.buttonSave()}
      </form>
    );
  }

  buttonSave() {
    const { functions: { submitBlog } } = this.props;
    return (
      <div className={styles.save_post}>
        <button onClick={submitBlog}>Simpan</button>
      </div>
    );
  }
}

export default DashboardComponent.render;
