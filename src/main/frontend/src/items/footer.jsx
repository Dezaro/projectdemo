import React, {Component} from 'react';

class Footer extends Component {

  render() {

    let style = {
      cursor: 'pointer'
    };

    return (

      <footer>
        <hr />
          <div className="container">
              <div className="row">
                  <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                      <ul className="list-inline text-center">
                          <li>
                              <a style={style} onClick="" >
                                  <span className="fa-stack fa-lg">
                                      <i className="fa fa-circle fa-stack-2x"></i>
                                      <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
                                  </span>
                              </a>
                          </li>
                          <li>
                              <a style={style} onClick="">
                                  <span className="fa-stack fa-lg">
                                      <i className="fa fa-circle fa-stack-2x"></i>
                                      <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
                                  </span>
                              </a>
                          </li>
                          <li>
                              <a target='_blank' rel="noopener noreferrer" href="https://github.com/Dezaro/projectdemo">
                                  <span className="fa-stack fa-lg">
                                      <i className="fa fa-circle fa-stack-2x"></i>
                                      <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                                  </span>
                              </a>
                          </li>
                      </ul>
                      <p className="copyright text-muted">Copyright &copy; Project Demo Blog 2017</p>
                  </div>
              </div>
          </div>
      </footer>
    );

  };

}

export default Footer;
