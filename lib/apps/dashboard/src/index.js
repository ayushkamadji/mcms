import React from "react"
import ReactDOM from 'react-dom'
// import App from './Containers/App'
import ApiUtils from './Utils/api'

import Sample from './Components/sample';

const { apps } = syscon
const baseAPI = ApiUtils

console.log(apps);

export const APIContext = React.createContext()

const APIContextProvider = ({children}) => (
  <APIContext.Provider value={baseAPI}>
      {children}
  </APIContext.Provider>
)
// ReactDOM.render(
//   <APIContextProvider>
//     <App apps={apps} />
//   </APIContextProvider>,
//   document.getElementById("root"))

ReactDOM.render(
  <APIContextProvider>
    <Sample />
  </APIContextProvider>,
  document.getElementById("root"))