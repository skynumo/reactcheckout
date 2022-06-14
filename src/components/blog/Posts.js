import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { add_post, fetch_posts, delete_post, edit_post } from "../../_actions";

import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const Posts = () => {
  const posts = useSelector(state => state.blog.posts);
  const dispatch = useDispatch();

  const newPost = {
    "userId": 8,
    "id": 6,
    "title": "new post eveniet quod temporibus",
    "body": "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae"
  };

  const editPost = {
    "userId": 10,
    "id": 6,
    "title": "Edit post eveniet quod temporibus",
    "body": "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae"
  };

  useEffect(() => {
    dispatch(fetch_posts());
  }, [dispatch])
  
  return (
    <> 
    <ListGroup className="mb-3"> 
      {
        posts.slice(0 , 5).reverse().map((post, index) => {
          return <ListGroup.Item key={post.id} className="d-flex justify-content-between align-items-start">{ post.title }   
            <div className="right">
              <Button className="me-1" size="sm" variant="primary" onClick={() => dispatch(edit_post(post.id, editPost))}>Edit</Button>
              <Button size="sm" variant="danger" onClick={() => dispatch(delete_post(post.id))}>Delete</Button>
            </div>
          </ListGroup.Item>
        })
      }
    </ListGroup>
    <Button variant="primary" onClick={() => dispatch(add_post(newPost))}>Add New Post</Button>
    </>
  )
}

export default Posts;