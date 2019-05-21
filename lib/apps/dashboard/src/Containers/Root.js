import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import SideBar from '../Components/SideBar'
import Main from './Main'

export class Root extends Component {
  render() {
    return (
      <div style={styles.root}>
        <Router basename="dashboard">
          <SideBar apps={this.props.apps}/>
          <Main apps={this.props.apps}/>
        </Router>
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