import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class SideBar extends Component {
  render() {
    return (
      <div style={styles.sidebar}>
        <Link to="/"><h3>Dashboard</h3></Link>
        {Object.keys(this.props.apps).map( appName => {
          const Menu = this.props.apps[appName].dashboard.menu
          return (
            <Menu key={appName} />
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
