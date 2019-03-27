import React from "react"
import ReactDOM from 'react-dom'
import App from './Containers/App'

const { apps } = syscon
console.log(apps)
ReactDOM.render(<App apps={apps}/>, document.getElementById("root"))
