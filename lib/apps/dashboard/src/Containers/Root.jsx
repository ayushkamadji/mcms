import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import SideBar from '../components/sidebar/index'
import Header from '../components/header/index'
import Main from './Main'
import styles from "../Utils/styles/root.scss";

export class Root extends Component {
  render() {
    return (
      <div className={styles.root}>
        <Router basename="dashboard">
          <SideBar apps={this.props.apps}/>
          <div className={styles.container}>
            <Header />
            <div className={styles.main_container}>
              <Main apps={this.props.apps}/>
            </div>
          </div>
        </Router>
      </div>
    )
  }
}

export default Root