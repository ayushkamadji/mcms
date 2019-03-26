import React, { Component } from 'react'

export class SideBar extends Component {
  render() {
    return (
      <div style={styles.sidebar}>
        <h3>Dashboard</h3>
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
