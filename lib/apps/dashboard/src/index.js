import React from 'react';
import { render } from 'react-dom';
import ApiUtils from './Utils/api'
import App from './App';

const { apps } = syscon
const baseAPI = ApiUtils;
const APIContext = React.createContext();
const APIContextProvider = ({children}) => (
  <APIContext.Provider value={baseAPI}>
    {children}
  </APIContext.Provider>
);

render(
  <APIContextProvider>
    <App apps={apps} />
  </APIContextProvider>,
  document.getElementById('root')
);
