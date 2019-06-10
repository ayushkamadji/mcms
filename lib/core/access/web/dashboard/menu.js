import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class UserMenu extends Component {
  render() {
    return (
      <Link to="/users">
        User
      </Link>
    )
  }
}

export default UserMenu
