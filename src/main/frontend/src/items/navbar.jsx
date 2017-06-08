import React, {Component} from 'react';

class Menu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: this.getUser()
    }
  };

  getUser = () => {
    let user = window.sessionStorage.getItem('user');
    if (user !== null) {
      return JSON.parse(user);
    }
    return null;
  };

  forceUpdateHandler = () => {
    this.forceUpdate(() => {
      console.log('in forse callback main');
    });
  };

  render() {

    let me = this;

    return (

      <nav className="navbar navbar-default navbar-custom navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header page-scroll">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              Menu
              <i className="fa fa-bars"></i>
            </button>
            <a className="navbar-brand" href="index.html">Project Demo Blog</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              {this.props.items.map(function(menu, index) {
                if (menu.type.name === 'Create' && me.getUser() !== null) {
                  return (menu);
                }
                if (menu.type.name === 'About') {
                  return (menu);
                }
                if (menu.type.name === 'Login') {
                  if (me.getUser() === null) {
                    return (menu);
                  }
                }
                if (menu.type.name === 'Logout') {
                  if (me.getUser() !== null) {
                    return (menu);
                  }
                }
                return null;
              })}

            </ul>
          </div>
        </div>
      </nav>

    );

  };
}

export default Menu;
