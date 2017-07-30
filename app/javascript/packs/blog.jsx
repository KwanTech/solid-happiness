import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function Blog(props) {
  return (
    <div className="blog">
      <h1 className='title'>{props.blog.title}</h1>
      <p>{props.blog.body}</p>
      <strong><a href="#" className="back-to-posts">Return</a></strong>
      <strong><a href="#" className="next-blog" data-post-id={props.blog.nextBlogId}>Next</a></strong>
    </div>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('blog');
  const data = JSON.parse(node.getAttribute('data'));
  const postsGrid = document.getElementById('posts-grid');
  const postsHtml = postsGrid.innerHTML

  postsGrid.addEventListener('click', function(ev) {
    ev.preventDefault();
    let readMe = ev.target.className;

    switch(readMe) {
      case 'read-more':
        let post = getPost(data, ev.target.getAttribute('data-post-id'));
        renderBlog(post, ev.currentTarget);
        break;
      case "back-to-posts":
        postsGrid.innerHTML = postsHtml;
        break;
      case "next-blog":
        let nextPostId = ev.target.getAttribute('data-post-id');
        let nextPost = getPost(data, nextPostId);
        renderBlog(nextPost, postsGrid);
        break;
      default:
        return;
    }
  });
})

function renderBlog (blog, container) {
  ReactDOM.render(
    <Blog blog={blog} />,
    container,
  )
}

function getPost(posts, postId) {
  for(let [index, postObject] of posts.entries()) {
    if (postObject["id"].toString() === postId) {
      postObject["nextBlogId"] = posts[index + 1] ? posts[index + 1]["id"] : posts[0]["id"]
      return postObject
    }
  }
}

