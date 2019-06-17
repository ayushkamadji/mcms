import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

const MainRouter = (props) => (
  <Switch>
    {
      [<Route key="dash" exact path="/" component={ (propsRoute) => <Home {...props} {...propsRoute} />} />]
      .concat(Object.keys(props.apps).map( appName => {
        const dashboards = props.apps[appName].dashboard;
        return dashboards.map(dashboard => {
          const Component = dashboard.component
          const { params } = dashboard;
          const urlPath = dashboard.url || appName;
          const path = params ? `/${urlPath}${params}` : `/${urlPath}`;
          const exact = dashboard.exact || false;
          return (
            <Route key={appName} exact={exact} path={path} 
              component={propsRoute => <Component {...props} {...propsRoute} />}
            />
          );
        })
      }))
    }
  </Switch>
)

const Home = (props) => {
  const { isAuthenticated, history } = props;
  if (!isAuthenticated) history.push('/login');
  return <h1>Welcome!</h1>;
}

export class Main extends Component {
  render() {
    return (
      <MainRouter {...this.props} />
    )
  }
}

export default Main
