import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class menu extends Component {
  render() {
    return (
      <div>
        <Link to="/hello">
          <h4> Hello </h4>
        </Link>
      </div>
    )
  }
}

export default menu
  