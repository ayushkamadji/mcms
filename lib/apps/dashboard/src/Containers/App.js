import React, { Component } from 'react'
import Root from './Root'
import { hot } from 'react-hot-loader'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Root apps={this.props.apps}/>
    )
  }
}

export default hot(module)(App)
