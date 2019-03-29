import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class UserMenu extends Component {
  render() {
    return (
      <Link to="/users" style={styles.wrapper}>
        <h4 style={styles.menuTitle}>
          User
        </h4>
      </Link>
    )
  }
}

const styles = {
  wrapper: {
    paddingLeft: "8px"
  },
  menuTitle: {
    color: "#e4e4e4"
  }
}

export default UserMenu
