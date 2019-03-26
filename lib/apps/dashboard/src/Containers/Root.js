import React, { Component } from 'react'
import SideBar from '../Components/SideBar'
import Main from './Main'

export class Root extends Component {
  render() {
    return (
      <div style={styles.root}>
        <SideBar />
        <Main />
      </div>
    )
  }
}

const styles = {
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "row",
  }
}

export default Root
