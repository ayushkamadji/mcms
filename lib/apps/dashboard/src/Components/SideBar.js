import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class SideBar extends Component {
  render() {
    return (
      <div style={styles.sidebar}>
        <h3>Dashboard</h3>
        {Object.keys(this.props.apps).map( appName => {
          return (
            <Link key={appName} to={`/${appName}`}>
              {appName}
            </Link>
          )
        })}
      </div>
    )
  }
}

const styles = {
  sidebar: {
    display: "flex",
    boxSizing: "border-box",
    flexDirection: "column",
    padding: "8px",
    backgroundColor: "#0f0f0fe4",
    color: "#dfdfdfe4",
    width: "240px",
    height: "100%"
  }
}

export default SideBar
