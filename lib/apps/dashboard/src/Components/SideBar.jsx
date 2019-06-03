import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.scss';

export class SideBar extends Component {
  render() {
    return (
      <div className={styles.side_menu}>>
        <Link to="/"><h3>Dashboard</h3></Link>
        {Object.keys(this.props.apps).map( appName => {
          const Menu = this.props.apps[appName].dashboard.menu
          return (
            <Menu key={appName} />
          )
        })}
        {/* <div className={styles.side_wrapper}>Okee</div> */}
      </div>
    )
  }
}

export default SideBar
