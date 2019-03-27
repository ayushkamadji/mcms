import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

const MainRouter = (props) => (
  <Switch>
    {
      [<Route key="dash" exact path="/" component={ () => <h1>dash</h1>}/>]
        .concat(Object.keys(props.apps).map( appName => {
        const Comp = props.apps[appName].dashboard.component
        return (
          <Route key={appName} path={`/${appName}`} component={Comp}/>
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
