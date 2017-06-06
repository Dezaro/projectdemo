import React, {Component} from 'react';

import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter
} from 'react-modal-bootstrap';

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    console.log(this.props.post);
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
      <div>
        <a style={style} onClick={this.openModal}>{this.props.post.post_title}</a>
        <Modal isOpen={this.state.isOpen} onRequestHide={this.hideModal} parentSelector={getParent}>
          <ModalHeader>
            <ModalClose onClick={this.hideModal}/>
            <ModalTitle>{this.props.post.post_title}</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <small>
              <p className="text-primary">
                {this.props.post.post_content}
              </p>
            </small>
          </ModalBody>
          <ModalFooter>
            <button className='btn btn-default' onClick={this.hideModal}>
              <span className="glyphicon glyphicon-remove"></span>  Close
            </button>
          </ModalFooter>
        </Modal>
      </div>
    );

  };
}

export default Review;
