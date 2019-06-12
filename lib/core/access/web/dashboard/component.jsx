import { Link } from 'react-router-dom'
import React from 'react';
import { FormInput, FormTextArea } from './common/form/index';
import styles from './styles.scss';

class UserComponent {
  static render(props) {
    return new UserComponent(props).root();
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
    const { user, functions: { setInput } } = this.props;
    const { profile } = user;
    const functions = setInput;
    return (
      <form className={styles.form_blog}>
        {FormInput({ label: 'Email', elmId: 'email', value: user.email, functions, readOnly: true })}
        {FormInput({ label: 'Nama Depan', elmId: 'first_name', value: profile.first_name, functions })}
        {FormInput({ label: 'Nama Belakang', elmId: 'last_name', value: profile.last_name, functions })}
        {FormInput({ label: 'Nomor ID', elmId: 'id_number', value: profile.id_number, functions })}
        {FormInput({ label: 'Telepon', elmId: 'phone', value: profile.phone, functions })}
        {FormTextArea({ label: 'Alamat', elmId: 'address', value: profile.address, functions })}
        {FormInput({ label: 'Kota', elmId: 'city', value: profile.city, functions })}
        {FormInput({ label: 'Provinsi', elmId: 'province', value: profile.province, functions })}
        {FormInput({ label: 'Kode Pos', elmId: 'post_code', value: profile.post_code, functions })}
        {FormInput({ label: 'Negara', elmId: 'country', value: profile.country, functions })}
        {this.buttonSave()}
      </form>
    );
  }

  buttonSave() {
    const { functions: { submitUser } } = this.props;
    return (
      <div className={styles.save_post}>
        <button onClick={submitUser}>Simpan</button>
      </div>
    );
  }
}

export default UserComponent.render;
