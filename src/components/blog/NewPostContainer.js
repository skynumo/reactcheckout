import { connect } from 'react-redux';
import { addPost } from '../../_actions/blogAction';
import NewPost from './NewPost';

const mapDispatchToProps = (dispatch) => {
    return {
        onAddPost: post => {
            dispatch(addPost(post));
        }    
    }
}   
 
export default connect(null, mapDispatchToProps)(NewPost);