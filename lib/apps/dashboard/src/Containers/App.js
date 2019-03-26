import React, { Component } from 'react'
import Root from './Root'
import { hot } from 'react-hot-loader'

class App extends Component {
  render() {
    return (
      <Root />
    )
  }
}

export default hot(module)(App)
