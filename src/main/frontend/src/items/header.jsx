import React, {Component} from 'react';
import home from '../img/home-bg.jpg';

class Header extends Component {
  render() {
    let style = {
      backgroundImage: `url(${home})`
    };
    return (

      <header className="intro-header" style={style}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
              <div className="site-heading">
                <h1>Project Demo Blog</h1>
                <hr className="small"/>
                <span className="subheading">A Project Demo Blog by Delo and Lilyana</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  };
};

export default Header;
