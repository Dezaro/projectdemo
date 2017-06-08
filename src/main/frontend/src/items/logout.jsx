import React, {Component} from 'react';
import $ from 'jquery';

class Logout extends Component {
  constructor(props) {
    super(props);

    this.state = {};

  };

  onLogout = () => {
    $.ajax({
      url: 'http://localhost:9099/authentication',
      crossDomain: true,
      xhrFields: {
        withCredentials: true
      },
      type: 'GET'
    }).done(() => {
      window.sessionStorage.clear();
      this.props.reload();
    });
  };

  getUser = () => {
    let user = window.sessionStorage.getItem('user');
    if (user !== null) {
      return JSON.parse(user);
    }
    return null;
  };

  render() {

    let style = {
      cursor: 'pointer'
    };

    let style2 = {
    marginTop: '4px',
    marginBottom: '6px',
    paddingTop: '0px',
    paddingBottom: '0px',
    textAlign: 'left'
    };

    let style3 = {
      marginRight: '5px'
    }

    let user = this.getUser();

    return (
      <ul className="nav navbar-nav navbar-right" style={style3}>
        <li className="dropdown" style={style3}>
          <a style={style} className="dropdown-toggle" data-toggle="dropdown">
            <span className="glyphicon glyphicon-user"></span>
            <strong> {user.username} </strong>
            <span className="glyphicon glyphicon-chevron-down"></span>
          </a>
          <ul className="dropdown-menu">
            <li>
              <div className="navbar-login">
                <div className="row">
                  <div className="col-lg-4">
                    <p className="text-center">
                      <span className="glyphicon glyphicon-user icon-size"></span>
                    </p>
                  </div>
                  <div className="col-lg-8">
                    <span className="text-success"><strong> {user.name} </strong></span>
                    <p className="text-right small text-warning" style={style2}>
                      <small>Email: </small><br />
                      <b>{user.username}@email.com</b>
                    </p>
                    <button type="button" className="btn btn-primary"><span className="glyphicon glyphicon-menu-hamburger"></span>  Settings</button>
                  </div>
                </div>
              </div>
            </li>
            <li className="divider"></li>
            <li>
              <div className="navbar-login navbar-login-session">
                <div className="row">
                  <div className="col-lg-12">
                      <button type="button" className="btn btn-danger btn-block" onClick={this.onLogout}><span className="glyphicon glyphicon-log-out"></span>  Logout</button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    );

  };
}

export default Logout;
