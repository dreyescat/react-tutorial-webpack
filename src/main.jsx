var React = require('react');

var CommentBox = require('./commentBox');

React.render(
  <CommentBox url="comments.json" pollInterval={2000} />,
  document.getElementById('content')
);
