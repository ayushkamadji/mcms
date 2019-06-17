import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.scss';

export class SideBar extends Component {
  render() {
    const { userInfo: { name } } = this.props;
    const contentMenu = Object.keys(this.props.apps).map( appName => {
      const dashboards = this.props.apps[appName].dashboard;
      return dashboards.map(dashboard => {
        const { params } = dashboard;
        const key = `${appName}-${params}`;
        const Menu = dashboard.menu || false;
        if (Menu) {
          return (
            <li key={`sb-${key}`}>
              <Menu key={appName} />
            </li>
          );
        }
        return null;
      })
    });
    return (
      <div className={styles.side_menu}>
        <div className={styles.logo_icon} />
        <div className={styles.user_info}>Hi, {name}</div>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          {contentMenu}
        </ul>
      </div>
    )
  }
}

export default SideBar
