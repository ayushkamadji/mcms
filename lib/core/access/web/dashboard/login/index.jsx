import Cookies from 'js-cookie'
import React from 'react';
import LoginComponent from './component';

export class LoginPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      payload: {}
    }
    this.keepUserInfo = this.keepUserInfo.bind(this);
  }

  handleInputChange = (e) => {
    this.setState({
      payload: {
        ...this.state.payload,
        [e.target.name]: e.target.value
      }
    });
  }

  login = (e) => {
    e.preventDefault();
    const { baseAPI, payload } = this.props;

    baseAPI.request({
      method: "POST",
      url: `/users/login`,
      data: payload
    })
    .then( response => response.data )
    .then( data => this.keepUserInfo(data) );

    // == assume as success
    const user = { accessToken: 123, id: 1, email: 'wahyu@gmail.com', userName: 'Wahyu' };
    this.keepUserInfo(user);
    // == remove it latter
  }

  keepUserInfo(user) {
    Cookies.set('mc.accessToken', user.accessToken || '', { expires: 7 });
    Cookies.set('mc.userId', user.id || '', { expires: 7 });
    Cookies.set('mc.email', user.email || '', { expires: 7 });
    Cookies.set('mc.name', user.userName || '', { expires: 7 });

    location.reload();
  }

  render() {
    const props = {
      ...this.props,
      payload: this.state.payload,
      functions: {
        setInput: this.handleInputChange.bind(this),
        login: this.login.bind(this)
      }
    };
    return (
      LoginComponent(props)
    );
  }
} 
export default LoginPage 