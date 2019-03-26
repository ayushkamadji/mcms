import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const MainRouter = (props) => (
  <Router basename="/dashboard">
    <Route exact path="/" component={ () => <h1>dash</h1>}/>
  </Router>
)

export class Main extends Component {
  render() {
    return (
      <MainRouter />
    )
  }
}

export default Main
