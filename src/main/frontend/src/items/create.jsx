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

class Create extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      postTitle: '',
      subTitle: '',
      postContent: ''
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
   console.log(me.state.postTitle);
   $.ajax({
     url: 'http://localhost:9099/api/posts',
     contentType: "application/json; charset=utf-8",
     type: 'POST',
     data: JSON.stringify({
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

    let style = {
      cursor: 'pointer'
    };

    function getParent() {
      return document.querySelector('#root');
    }

    return (
      <li>
        <a style={style} onClick={this.openModal}>
          <span className="glyphicon glyphicon-plus"></span>  Create Post</a>
        <Modal isOpen={this.state.isOpen} onRequestHide={this.hideModal} parentSelector={getParent}>
          <ModalHeader>
            <ModalClose onClick={this.hideModal}/>
            <ModalTitle>Create Post</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <form onSubmit={this.handleSubmit}>
              {/* <div className="input-group">
                <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                <input id="email" type="text" className="form-control" name="email" placeholder="Email" />
              </div> */}
              <div className="form-group">
                <label for="title">Post Titel</label>
                <input type="text" className="form-control" id="title" aria-describedby="post-title" placeholder="Post Title" value={this.state.postTitle} onChange={this.handleTitleChange} />
                <small id="tileHelp" className="form-text text-muted">Title will be link to your post.</small>
              </div>
              <div className="form-group">
                <label for="sub_title">Sub Titel</label>
                <input type="text" className="form-control" id="sub_title" aria-describedby="post-sub-title" placeholder="Sub Title" value={this.state.subTitle} onChange={this.handleSubTitleChange} />
                <small id="subTitleHelp" className="form-text text-muted">This sub title will resume of you post.</small>
              </div>
              <div className="form-group">
                <label for="post_content">Post content</label>
                <textarea className="form-control" id="post_content" rows="11" placeholder="Post Content" value={this.state.postContent} onChange={this.handlePostContentChange} />
                <small id="postContentHelp" className="form-text text-muted">Your post content.</small>
              </div>
              <ModalFooter>
                <button type="button" className='btn btn-default' onClick={this.hideModal}>
                <span className="glyphicon glyphicon-remove"></span>  Close</button>
                <button type="submit" className="btn btn-success">
                  <span className="glyphicon glyphicon-plus"></span>  Create</button>
              </ModalFooter>
            </form>
          </ModalBody>
        </Modal>
      </li>

    );

  };
}

export default Create;
