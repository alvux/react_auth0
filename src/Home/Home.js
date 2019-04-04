import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';

class Home extends Component {
  login() {
    this.props.auth.login();
  }

  getEmail() {
    let idToken = this.props.auth.getIdToken();
    return jwtDecode(idToken).email;
    
  }
  render() {
    const { isAuthenticated } = this.props.auth;
 
    return (
      <div className="container">
        {
          isAuthenticated() && (
              <h4>
                You are logged in! Your email is : <b>{this.getEmail()}</b>
              </h4>
              
             
            )
        }
        {
          !isAuthenticated() && (
              <h4>
                You are not logged in! Please{' '}
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={this.login.bind(this)}
                >
                  Log In
                </a>
                {' '}to continue.
              </h4>
            )
        }
      </div>
    );
  }
}

export default Home;
