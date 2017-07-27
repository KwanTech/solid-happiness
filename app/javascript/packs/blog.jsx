// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function Blog(props) {
  return (
    <p>{props.blog.body}</p>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('blog')
  const data = JSON.parse(node.getAttribute('data'))

  document.getElementById('posts-grid').addEventListener('click', function(ev) {
    ev.preventDefault();
    const readMe = ev.target.className

    if (readMe === 'read-more') {
      let post = getPost(data, ev.target.getAttribute('data-post-id'))
      console.log()
      ReactDOM.render(
        <Blog blog={post} />,
        ev.currentTarget,
      )
    }
  });
})

function getPost(posts, postId) {
  for(var postObject of posts) {
    if (postObject["id"].toString() === postId) {
      return postObject
    }
  }
}

