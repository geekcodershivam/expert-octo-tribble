import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
  } from '../types';
  import history from '../history';
  import axios from 'axios';
  import { returnErrors } from './errorActions';
  
  export const Authlogin = (data) => (dispatch) => {
    axios
      .post('/auth/login', data)
      .then((res) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });
        history.push('/home')
      })

      .catch((err) => {
        dispatch(
          returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
        );
        dispatch({
          type: LOGIN_FAIL,
        });
      });
  };