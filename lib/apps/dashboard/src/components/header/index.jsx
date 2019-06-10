import React from 'react'
import styles from './styles.scss';

export class Header extends React.Component {
  render() {
    return (
      <div className={styles.header}>
        <h2>Hellow bro</h2>
        <button className={styles.logout}>Logout</button>
      </div>
    )
  }
}

export default Header
