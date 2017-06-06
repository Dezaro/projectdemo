import './App.css';
import './vendor/font-awesome/css/font-awesome.min.css';
import './js/clean-blog.js';

import React, {Component} from 'react';
import Menu from './items/navbar.jsx';
import Header from './items/header.jsx';
import Footer from './items/footer.jsx';
import Post from './items/post.jsx';
import About from './items/about.jsx';
import Create from './items/create.jsx';
import $ from 'jquery';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      start: 0,
      limit: 5
    };

    this.getPosts();

    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  };

  forceUpdateHandler() {
    this.forceUpdate(() => {
      console.log('in forse callback main');
    });
  };

  getPosts = (limit) => {
    let me = this;
    $.ajax({
      url: 'http://localhost:9099/api/posts',
      type: 'GET',
      data: {
        start: me.state.start,
        limit: (typeof limit !== 'undefined')
          ? limit
          : me.state.limit
      }
    }).done((result) => {
      this.setState({posts: result});
    });
  };

  getOlderPosts = () => {
    let limit = this.state.limit + 5;
    this.setState({limit: limit});
    this.getPosts(limit);
  };

  render() {

    return (
      <div className="App">
        <Menu items={[<Create reload={this.getPosts} />, <About name = 'About' />]}/>
        <Header/>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
              <Post reload={() => this.getPosts()} items={this.state.posts}/>
              <ul className="pager">
                <li className="next">
                  <a onClick={this.getOlderPosts}>Older Posts  <span className="glyphicon glyphicon-share-alt"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
