import React from 'react';
import classNames from 'classnames';
import styles from './styles.scss';

class Form {
  static input({ label, elmId, inputType, functions, value, readOnly, autoComplete }) {
    const controlClass = classNames({
      [styles.form_control]: true,
      [styles.success]: false,
      [styles.error]: false
    });
    return (
      <div className={controlClass}>
        <label htmlFor={elmId}>{label}</label>
        <input
          value={value}
          onChange={functions || null}
          type={inputType || 'text'}
          name={elmId}
          id={elmId}
          readOnly={readOnly}
          autoComplete={autoComplete}
        />
        {/* <div className={styles.input_error}>Email tidak valid</div> */}
      </div>
    );
  }

  static textArea({ label, elmId, functions, value }) {
    const textClass = classNames({
      [styles.form_control]: true,
      [styles.success]: false,
      [styles.error]: false
    });
    return (
      <div className={textClass}>
        <label htmlFor={elmId}>{label}</label>
        <textarea value={value} onChange={functions || null} rows={7} name={elmId} id={elmId} />
        {/* <div className={styles.input_error}>Email tidak valid</div> */}
      </div>
    );
  }
}

const FormInput = props => Form.input(props);
const FormTextArea = props => Form.textArea(props);

export { FormInput, FormTextArea };
