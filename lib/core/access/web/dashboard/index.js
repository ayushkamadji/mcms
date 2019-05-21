import React, { Component } from 'react'

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
        email: "b@email.org",
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
      url: "/users/2/profile"
    })
    .then( response => response.data)
    .then( profile => this.setState({ user: { ...user, profile }
    }))
  }

  onInputChange = (e) => {
    const { target } = e

    this.setState({
      [target.name]: target.value
    })
  }

  render() {
    if (!this.state.user || !this.state.user.profile) return (
      <h4>Loading</h4>
    )
    return (
      <div>
        <h3>Site Owner</h3>
        <div className="user">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" value={this.state.user.email}/>
          <label htmlFor="password">Password</label>
          <input type="text" name="password" value=""/>
        </div>
        <div className="profile" style={{paddingTop: "10px", display: "flex", flexDirection: "column"}}>
          <div>
            <label htmlFor="first_name">First Name</label>
            <input type="text" name="first_name" value={this.state.user.profile.first_name}/>
          </div>
          <div>
            <label htmlFor="last_name">Last Name</label>
            <input type="text" name="last_name" value={this.state.user.profile.last_name}/>
          </div>
          <div>
            <label htmlFor="id_number">ID Number</label>
            <input type="text" name="id_number" value={this.state.user.profile.id_number}/>
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input type="text" name="address" value={this.state.user.profile.address}/>
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input type="text" name="city" value={this.state.user.profile.city}/>
          </div>
          <div>
            <label htmlFor="province">Province</label>
            <input type="text" name="province" value={this.state.user.profile.province}/>
          </div>
          <div>
            <label htmlFor="post_code">Post Code</label>
            <input type="text" name="post_code" value={this.state.user.profile.post_code}/>
          </div>
          <div>
            <label htmlFor="country">Country</label>
            <input type="text" name="country" value={this.state.user.profile.country}/>
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input type="text" name="phone" value={this.state.user.profile.phone}/>
          </div>
        </div>
      </div>
    )
  }
} 
export default UserDash 