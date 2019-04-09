import React from 'react';
import { Admin, Resource, EditGuesser } from 'react-admin';
import posts from './posts/';
import { Landing } from './landing/';
import { Layout, Login } from './layout/';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const App = () => (
  <Admin
    title="IMOW Dashboard"
    dashboard={Landing}
    dataProvider={dataProvider}
    loginPage={Login}
    appLayout={Layout}
  >
    <Resource name="posts" {...posts} />
  </Admin>
);

export default App;