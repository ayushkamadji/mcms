import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.scss';

export class SideBar extends Component {
  render() {
    return (
      <div className={styles.side_menu}>
        <div className={styles.logo_icon} />
        <div className={styles.user_info}>Hi, User</div>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          {Object.keys(this.props.apps).map( appName => {
            const Menu = this.props.apps[appName].dashboard.menu
            return (
              <li>
                <Menu key={appName} />
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default SideBar
