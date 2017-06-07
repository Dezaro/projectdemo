import React, {Component} from 'react';
import $ from 'jquery';
import Review from './review.jsx';
import Delete from './delete.jsx';
import Edit from './edit.jsx';

class Post extends Component {

  constructor(posts) {
    super(posts);

    this.state = {}

                console.log(this.props.items);

  };

  forceUpdateHandler = () => {
    this.forceUpdate(() => {
      console.log('in callback');
    });
  };

  onDelete(id) {
    $.ajax({
      url: 'http://localhost:9099/api/posts/' + id,
      type: 'DELETE'
    }).done((result) => {
      this.setState({posts: result});
      this.props.reload();
    });
  }

  render() {

    let me = this;

    function format(string) {
      // return string;
      // var timestamp = moment.unix(1293683278);
      // console.log( timestamp.format("HH/mm/ss") );
      let n = string.indexOf('T');
      let date = string.substring(0, n);
      let dot = string.indexOf('.');
      return date + ' ' + string.substring(n + 1, dot) ;
    };

    return (
      <div>
        <div className="post-preview">
          {this.props.items.map(function(post, index) {
            return (
              <div>
                <a>
                  <h2 className="post-title">
                    <Review post={post}/>
                  </h2>
                </a>
                <p className="post-meta text-primary">
                  {post.sub_title}
                </p>
                <p className="text-warning">
                  <small>Posted by {post.creater_name} on {format(post.created)}.</small>
                </p>
                <Edit post={post} reload={() => me.props.reload()}/>
                <Delete onClick={() => me.onDelete(post.id)}/>
                <hr/>
              </div>
            );
          })
        }
        </div>
      </div>
    );

  };

}

export default Post;
