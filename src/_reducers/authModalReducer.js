import * as actionType from "../_actionTypes";

const initialState = {
  showSigninModal: false,
  showSignupModal: false,
}

const authModalReducer = (state = initialState, action) => {

  switch (action.type) {

    case actionType.SHOW_SIGNIN_MODAL:
      return {
        ...state,
        showSigninModal: true
      }

    case actionType.HIDE_SIGNIN_MODAL:
      return {
        ...state,
        showSigninModal: false
      }

    case actionType.SHOW_SIGNUP_MODAL:
      return {
        ...state,
        showSignupModal: true
      }

    case actionType.HIDE_SIGNUP_MODAL:
      return {
        ...state,
        showSignupModal: false
      }

    default:
      return state;
  }

}

export default authModalReducer;