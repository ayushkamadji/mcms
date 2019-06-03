import React, { Component } from 'react'
import Root from './Root'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Root apps={this.props.apps}/>
    )
  }
}
