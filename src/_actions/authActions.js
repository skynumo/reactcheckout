import { httpPost } from '../_services/httpService';
import { AfterUserLogin } from "../_services/auth.service";
import { showNotification } from "../components/Notifications/showNotification";
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
} from "./types";
import { HandleErrors } from './handelErrors';
import { v4 as uuidv4 } from 'uuid';
import { push } from "connected-react-router";

export const signup = (data) => (dispatch) => {
    return httpPost('register/', data, false).then(res => {
        return Promise.resolve(res.data);
    }).catch((error) => {
        return Promise.reject(error.response);
    })
}

export const refreshToken = (data) => (dispatch) => {
    return httpPost('token/refresh/', data, true).then(res => {
        return Promise.resolve(res.data);
    }).catch((error) => {
        dispatch(HandleErrors(error.response))
        return Promise.reject(error.response);
    })
}

export const login = (data) => (dispatch) => {
    return httpPost("login/", data, false).then(
        (response) => {
            if (response.data.token) {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: response.data,
                });
                AfterUserLogin(response.data);
            }
            else {
                showNotification(
                    "Login Falied",
                    `Invalid Username or Password`,
                    "danger",
                    4000
                );
            }
            return Promise.resolve(response.data);
        },
        (error) => {

            dispatch({
                type: LOGIN_FAIL,
            });

            return Promise.reject(error);
        }
    );
};


export const ClearStorageForNoUser = (redirect = false) => (dispatch) => {
    sessionStorage.clear();
    sessionStorage.setItem("clear", true);
    sessionStorage.setItem('uuid', uuidv4())
    localStorage.removeItem('alreadyLoggedIn');
    // todo: clear the store also
    dispatch({
        type: LOGOUT,
        payload: null,
    });
    if(redirect){
        dispatch(push("/home"));
    }
  };