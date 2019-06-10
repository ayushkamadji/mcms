import React from "react"
import ReactDOM from 'react-dom'
import App from './containers/App'
import ApiUtils from './Utils/api'

const { apps } = syscon
const baseAPI = ApiUtils

export const APIContext = React.createContext()

const APIContextProvider = ({children}) => (
  <APIContext.Provider value={baseAPI}>
      {children}
  </APIContext.Provider>
)
ReactDOM.render(
  <APIContextProvider>
    <App apps={apps} />
  </APIContextProvider>,
  document.getElementById("root"))