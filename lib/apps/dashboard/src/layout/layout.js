import React from 'react';
import { connect } from 'react-redux';
import { Layout, Sidebar } from 'react-admin';
import AppBar from './appBar';
import Menu from './menu';
import { darkTheme, lightTheme } from './themes';

const CustomSidebar = props => <Sidebar {...props} size={200} />;
const CustomLayout = props => (
    <Layout {...props} appBar={AppBar} sidebar={CustomSidebar} menu={Menu} />
);

export default connect(
    state => ({
        theme: state.theme === 'dark' ? darkTheme : lightTheme,
    }),
    {}
)(CustomLayout);