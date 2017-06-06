import React, {Component} from 'react';
import $ from 'jquery';

import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter
} from 'react-modal-bootstrap';

class Edit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      postTitle: props.post.post_title,
      subTitle: props.post.sub_title,
      postContent: props.post.post_content
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

  handleTitleChange = (event) => {
    this.setState({postTitle: event.target.value});
  };

  handleSubTitleChange = (event) => {
    this.setState({subTitle: event.target.value});
  };

  handlePostContentChange = (event) => {
    this.setState({postContent: event.target.value});
  };

  handleSubmit = (event) => {
   let me = this;
   $.ajax({
     url: 'http://localhost:9099/api/posts',
     contentType: "application/json; charset=utf-8",
     type: 'PUT',
     data: JSON.stringify({
       "id": me.props.post.id,
       "post_title": me.state.postTitle,
       "sub_title": me.state.subTitle,
       "post_content": me.state.postContent
     })
   }).done((result) => {
     this.hideModal();
     this.props.reload();
   });
   event.preventDefault();
 }

  render() {

    function getParent() {
      return document.querySelector('#root');
    }

    return (
      <span>
        <button type="button" className="btn btn-info" onClick={this.openModal}>
          <span className="glyphicon glyphicon-pencil"></span>  Edit</button>
        <Modal isOpen={this.state.isOpen} onRequestHide={this.hideModal} parentSelector={getParent}>
          <ModalHeader>
            <ModalClose onClick={this.hideModal}/>
            <ModalTitle>Editing</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label for="title">Post Titel</label>
                <input type="text" className="form-control" id="title" aria-describedby="post-title" placeholder="Post Title" value={this.state.postTitle} onChange={this.handleTitleChange} />
              </div>
              <div className="form-group">
                <label for="sub_title">Sub Titel</label>
                <input type="text" className="form-control" id="sub_title" aria-describedby="post-sub-title" placeholder="Sub Title" value={this.state.subTitle} onChange={this.handleSubTitleChange} />
              </div>
              <div className="form-group">
                <label for="post_content">Post content</label>
                <textarea className="form-control" id="post_content" rows="11" placeholder="Post Content" value={this.state.postContent} onChange={this.handlePostContentChange} />
              </div>
              <ModalFooter>
                <button type="button" className='btn btn-default' onClick={this.hideModal}>
                <span className="glyphicon glyphicon-remove"></span>  Close</button>
                <button type="submit" className="btn btn-info">
                  <span className="glyphicon glyphicon-pencil"></span>  Edit</button>
              </ModalFooter>
            </form>
          </ModalBody>
        </Modal>
      </span>

    );

  };
}

export default Edit;
