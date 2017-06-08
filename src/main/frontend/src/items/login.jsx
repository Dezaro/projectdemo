import React, {Component} from 'react';
import $ from 'jquery';
import AlertContainer from 'react-alert'

import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter
} from 'react-modal-bootstrap';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      username: '',
      password: ''
    };

  };

  showAlert = () => {
     this.msg.show('Invalid username or password!', {
       time: 5000,
       type: 'error'
     })
   }

  openModal = () => {
    this.setState({isOpen: true});
  };

  hideModal = () => {
    this.setState({isOpen: false});
  };

  handleUsernameChange = (event) => {
    this.setState({username: event.target.value});
  };

  handlePasswordChange = (event) => {
    this.setState({password: event.target.value});
  };

handleSubmit = (event) => {
  let me = this;
  $.ajax({
    url: 'http://localhost:9099/authentication',
    crossDomain: true,
    xhrFields: {
      withCredentials: true
     },
    type: 'POST',
    data: {
      "username": me.state.username,
      "password": me.state.password
    }
  }).done((result) => {
    window.sessionStorage.setItem('user', JSON.stringify(result));
    this.hideModal();
    this.props.reload();
  }).fail((jqXHR, textStatus, errorThrown) => {
    this.showAlert();
  });
  event.preventDefault();
}

  render() {

    let style = {
      cursor: 'pointer'
    };

    function getParent() {
      return document.querySelector('#root');
    }

    return (
      <li>
        <a style={style} onClick={this.openModal}>
          <span className="glyphicon glyphicon-log-in"></span>  Login</a>
        <Modal isOpen={this.state.isOpen} onRequestHide={this.hideModal} parentSelector={getParent}>
          <ModalHeader>
            <ModalClose onClick={this.hideModal}/>
            <ModalTitle>Login</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <form onSubmit={this.handleSubmit}>
              <AlertContainer ref={a => this.msg = a} {...this.alertOptions} theme='light'/>
              <div className="form-group">
                <div className="input-group">
                  <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                  <input id="username" type="text" className="form-control" name="username" placeholder="User name" value={this.state.username} onChange={this.handleUsernameChange}  />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                  <input id="password" type="password" className="form-control" name="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}  />
                </div>
              </div>
              <ModalFooter>
                <button type="button" className='btn btn-default' onClick={this.hideModal}>
                <span className="glyphicon glyphicon-remove"></span>  Close</button>
                <button type="submit" className="btn btn-primary">
                  <span className="glyphicon glyphicon-log-in"></span>  Login</button>
              </ModalFooter>
            </form>
          </ModalBody>
        </Modal>
      </li>

    );

  };
}

export default Login;
