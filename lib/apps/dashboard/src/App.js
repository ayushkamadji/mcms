import React from 'react';
import { Admin, Resource } from 'react-admin';
import authProvider from './authProvider';
import posts from './posts/';
import { Landing } from './landing/';
import { Layout, Login, Logout } from './layout/';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const App = () => (
  <Admin
    title="IMOW Dashboard"
    authProvider={authProvider}
    dashboard={Landing}
    dataProvider={dataProvider}
    loginPage={Login}
    logoutButton={Logout}
    appLayout={Layout}
  >
    <Resource name="posts" {...posts} />
  </Admin>
);

export default App;