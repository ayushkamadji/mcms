import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { APIContext } from '../index'

const MainRouter = (props) => (
  <Switch>
    {
      [<Route key="dash" exact path="/" component={ () => <h1>dash mu</h1>}/>]
        .concat(Object.keys(props.apps).map( appName => {
        const Comp = props.apps[appName].dashboard.component
        return (
          <Route key={appName} path={`/${appName}`} component={
            () => (
              <APIContext.Consumer>
                { (baseAPI) => (
                  <Comp baseAPI={baseAPI}/>
                )}
              </APIContext.Consumer>
            )
          }/>
        )
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
