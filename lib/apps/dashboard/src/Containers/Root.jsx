import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { APIContext } from '../index'
import SideBar from '../components/sidebar/index'
import Header from '../components/header/index'
import Main from './Main'
import styles from "../Utils/styles/root.scss";


export class Root extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <Router basename="dashboard">
          <APIContext.Consumer>
            {(base) => (
              <React.Fragment>
                {this.sideBar(base)}
                {this.container(base)}
              </React.Fragment>
            )}
          </APIContext.Consumer>
        </Router>
      </div>
    )
  }

  sideBar(base) {
    const { isAuthenticated } = base;
    if (isAuthenticated) {
      return <SideBar {...base} apps={this.props.apps}/>;
    }
    return null;
  }

  header(base) {
    const { isAuthenticated } = base;
    if (isAuthenticated) {
      return <Header {...base} />;
    }
    return null;
  }

  container(base) {
    const { isAuthenticated } = base;
    const containerClass = isAuthenticated ? styles.container : styles.container_login;
    const mainContainerClass = isAuthenticated ? styles.main_container : '';
    return (
      <div className={containerClass}>
        {this.header(base)}
        <div className={mainContainerClass}>
          <Main {...base} apps={this.props.apps}/>
        </div>
      </div>
    );
  }
}

export default Root