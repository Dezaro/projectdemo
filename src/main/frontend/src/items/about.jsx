import React, {Component} from 'react';

import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter
} from 'react-modal-bootstrap';

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  };

  openModal = () => {
    this.setState({isOpen: true});
  };

  hideModal = () => {
    this.setState({isOpen: false});
  };

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
        <span className="glyphicon glyphicon-book"></span>  {this.props.name}
        </a>
        <Modal
          isOpen={this.state.isOpen}
          onRequestHide={this.hideModal}
          parentSelector={getParent}
          >
          <ModalHeader>
            <ModalClose onClick={this.hideModal}/>
            <ModalTitle>{this.props.name}</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <p>This Blog is created from Delo Branchev 1301681030 and Lilyana Ihtimanska 1301681021. Link to github can be find in page footer.</p>
          </ModalBody>
          <ModalFooter>
            <button className='btn btn-default' onClick={this.hideModal}>
              <span className="glyphicon glyphicon-remove"></span>  Close
            </button>
          </ModalFooter>
        </Modal>
      </li>

    );

  };
}

export default About;
