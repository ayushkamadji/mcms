import React, { Component } from 'react';
import UserComponent from './component';

export class UserDash extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
      update: {
        email: ""
      },
      email: ""
    }
  }

  componentDidMount = () => {
    const { baseAPI } = this.props

    baseAPI.request({
      method: "POST",
      url: "/login",
      data: {
        email: "wahyu@gmail.com",
        password: "12345"
      }
    })
    .then(response => response.data)
    .then(this.getProfile)
  }

  getProfile = (user) => {
    const { baseAPI } = this.props

    baseAPI.request({
      method: "GET",
      url: "/users/1/profile"
    })
    .then( response => response.data)
    .then( profile => this.setState({ user: { ...user, profile }
    }))
  }

  handleInputChange = (e) => {
    this.setState({
      user: {
        profile: {
          ...this.state.user.profile,
          [e.target.name]: e.target.value
        }
      }
    });
  }

  submitUser = (e) => {
    e.preventDefault();
    const { baseAPI } = this.props;
    const editedProfile = this.state.user.profile;
    const userId = editedProfile.id;

    baseAPI.request({
      method: "PATCH",
      url: `/users/${userId}/profile`,
      data: editedProfile
    })
    .then( response => response.data );
    // TODO: create success flash message
  }

  render() {
    const props = {
      ...this.props,
      user: this.state.user,
      functions: {
        setInput: this.handleInputChange.bind(this),
        submitUser: this.submitUser.bind(this)
      }
    };
    if (this.state.user && this.state.user.profile) {
      return UserComponent(props);
    }
    return <h4>Loading</h4>;
  }
} 
export default UserDash 