import React, {Component} from 'react';

import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter
} from 'react-modal-bootstrap';

class Delete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  };

  delete = () => {
    this.props.onClick();
    this.hideModal();
  };

  openModal = () => {
    this.setState({isOpen: true});
  };

  hideModal = () => {
    this.setState({isOpen: false});
  };

  render() {

    function getParent() {
      return document.querySelector('#root');
    }

    return (
      <span>
        <button type="button" className="btn btn-danger" onClick={this.openModal}>
          <span className="glyphicon glyphicon-trash"></span>  Delete</button>
        <Modal isOpen={this.state.isOpen} onRequestHide={this.hideModal} parentSelector={getParent}>
          <ModalHeader>
            <ModalClose onClick={this.hideModal}/>
            <ModalTitle>Deleting</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <p>Are you sure want to delete post?</p>
          </ModalBody>
          <ModalFooter>
            <button className='btn btn-default' onClick={this.hideModal}>
              Close
            </button>
            {/* <button type="button" className="btn btn-danger" onClick={this.props.onClick}> */}
            <button type="button" className="btn btn-danger" onClick={this.delete}>
              <span className="glyphicon glyphicon-trash"></span>  Delete</button>
          </ModalFooter>
        </Modal>
      </span>

    );

  };
}

export default Delete;
