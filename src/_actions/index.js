import * as actionTypes from "../_actionTypes";
import  Api  from  '../_services/Api';
const  api  =  new  Api();

// Fetch Posts Action Creator - Redux Thunk
export const fetch_posts = () => (dispatch) => {
  api.getData('posts').then((res) => {
    if (res.status === 200) {
      dispatch(set_post(res.data));
    }
  })
  .catch((error) => {
    console.log(error);
  })
}

// Add Post Action - Using Array Function
export const add_post = (data) => {
  return {
    type: actionTypes.ADD_POST,
    payload: data
  }
}

// Edit Post Action - Using Array Function
export const edit_post = (postId, data) => {
  return {
    type: actionTypes.EDIT_POST,
    payload: {
      id: postId,
      post: data
    }
  }
}

// Delete Post Action - Using Array Function
export const delete_post = (postid) => {
  return {
    type: actionTypes.DELETE_POST,
    payload: postid
  }
}

// SET Post Action - Using Array Function
export const set_post = (data) => {
  return {
    type: actionTypes.SET_POST,
    payload: data
  }
}

// Action for Increment Counter
export function increment() {
    return {
        type: 'INCREMENT'
    }
}

// Action for Decrement Counter
export function decrement() {
    return {
        type: 'DECREMENT'
    }
}

// Action for Reset Counter
export function reset() {
    return {
        type: 'RESET'
    }
}  