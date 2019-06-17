import Cookies from 'js-cookie';
import React from 'react'
import styles from './styles.scss';

export class Header extends React.Component {
  logout() {
    Cookies.remove('mc.accessToken');
    Cookies.remove('mc.userId');
    Cookies.remove('mc.email');
    Cookies.remove('mc.name');
    
    location.reload();
  }
  render() {
    return (
      <div className={styles.header}>
        <h2>Content Management</h2>
        <button onClick={this.logout} className={styles.logout}>Logout</button>
      </div>
    )
  }
}

export default Header
