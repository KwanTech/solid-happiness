import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

document.addEventListener('DOMContentLoaded', () => {

  let state = function () {
    const node = document.getElementById('blog');
    const data = JSON.parse(node.getAttribute('data'));
    const postsGrid = document.getElementById('posts-grid');
    const postsHtml = postsGrid.innerHTML

    return {
      node: node,
      data: data,
      postsGrid: postsGrid,
      postsHtml: postsHtml
    }
  }();

  state.postsGrid.addEventListener('click', function(ev) {
    ev.preventDefault();
    blogAction(state, ev);
  });
})

function blogAction(state, ev) {
  let readMe = ev.target.className;

  switch(readMe) {
    case 'read-more':
      let post = getPost(state.data, ev.target.getAttribute('data-post-id'));
      renderBlog(post, ev.currentTarget);
      break;
    case "back-to-posts":
      state.postsGrid.innerHTML = state.postsHtml;
      break;
    case "next-blog":
      let nextPostId = ev.target.getAttribute('data-post-id');
      let nextPost = getPost(state.data, nextPostId);
      renderBlog(nextPost, state.postsGrid);
      break;
    default:
      return;
  }
}

function getPost(posts, postId) {
  for(let [index, postObject] of posts.entries()) {
    if (postObject["id"].toString() === postId) {
      postObject["nextBlogId"] = nextBlogId(index, posts)
      return postObject
    }
  }
}

function nextBlogId (index, posts) {
  return posts[index + 1] ? posts[index + 1]["id"] : posts[0]["id"]
}

function renderBlog (blog, container) {
  ReactDOM.render(
    <Blog blog={blog} />,
    container,
  )
}

function Blog(props) {
  const blog = props.blog;

  return (
    <div className="blog">
      <h1 className='title'>{blog.title}</h1>
      <p>{blog.body}</p>
      <strong><a href="#" className="back-to-posts">Return</a></strong>
      <strong><a href="#" className="next-blog" data-post-id={blog.nextBlogId}>Next</a></strong>
    </div>
  )
}
