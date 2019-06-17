import { FormInput } from '../common/form/index';
import React from 'react';
import LogoMCMS from './assets/logo-mcms.png'
import styles from './styles.scss';

class LoginComponent {
  static render(props) {
    return new LoginComponent(props).root();
  }

  constructor(props) {
    this.props = props;
  }

  root() {
    return (
      <div className={styles.login_page}>
        {this.header()}
        {this.forms()}
      </div>
    )
  }
  
  header() {
    return (
      <div className={styles.header}>
        <img src={LogoMCMS} alt="Logo mcms" />
      </div>
    );
  }

  forms() {
    const { payload, functions: { setInput } } = this.props;
    const functions = setInput;
    return (
      <form className={styles.form_login}>
        <div className={styles.dash_wrapper}>
            {FormInput({ label: 'Email', elmId: 'email', value: payload.email, functions })}
            {FormInput({ label: 'Password', elmId: 'password', value: payload.password, functions, inputType: 'password' })}
            {this.buttonLogin()}
        </div>
      </form>
    );
  }

  buttonLogin() {
    const { functions: { login } } = this.props;
    return (
      <div className={styles.login_action}>
        <button onClick={login}>Masuk</button>
      </div>
    );
  }
}

export default LoginComponent.render;
