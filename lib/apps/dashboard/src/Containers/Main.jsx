import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { APIContext } from '../index'

const MainRouter = (props) => (
  <Switch>
    {
      [<Route key="dash" exact path="/" component={ () => <h1>Welcome, User!</h1>}/>]
      .concat(Object.keys(props.apps).map( appName => {
        const dashboards = props.apps[appName].dashboard;
        return dashboards.map(dashboard => {
          const Comp = dashboard.component
          const { params } = dashboard;
          const path = params ? `/${appName}${params}` : `/${appName}`;
          const exact = dashboard.exact || false;
          return (
            <Route key={appName} exact={exact} path={path} 
              component={
                (props) => (
                  <APIContext.Consumer>
                    {(baseAPI) => (
                      <Comp {...props} baseAPI={baseAPI}/>
                    )}
                  </APIContext.Consumer>
                )
              }
            />
          );
        })
      }))
    }
  </Switch>
)

export class Main extends Component {
  render() {
    return (
      <MainRouter apps={this.props.apps}/>
    )
  }
}

export default Main
