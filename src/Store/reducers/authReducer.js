/* eslint-disable default-case */
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
  } from '../types';
  
  const init = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null,
  };
  // eslint-disable-next-line import/no-anonymous-default-export
  export default function (state = init, action) {
    switch (action.type) {
      case LOGIN_SUCCESS:
      case REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload.token);
        return {
          ...state,
          ...action.payload,
          isLoading: true,
          isAuthenticated: true,
        };
        
      case LOGIN_FAIL:
      case REGISTER_FAIL:
        localStorage.removeItem('token');
        return {
          ...state,
          token: null,
          user: null,
          isAuthenticated: false,
          isLoading: false,
        };
  
      default:
        return state;
    }
  }