import React, {Component} from 'react';

class Menu extends Component {

  constructor(props) {
    super(props);

    this.state = {}
  };

  render() {

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
                return (menu);
              })}
            </ul>
          </div>
        </div>
      </nav>

    );

  };
}

export default Menu;
