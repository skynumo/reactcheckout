import { combineReducers } from 'redux';
import authModalReducer from './authModalReducer';
import cartReducer from './cartReducer';

const reducer = combineReducers({
    authModal: authModalReducer,
    cart: cartReducer
}); 

export default reducer;