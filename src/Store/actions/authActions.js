import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT_SUCCESS
} from "../types";
import history from "../history";
import axios from "axios";
import { returnErrors } from "./errorActions";

export const Authlogin = (data) => (dispatch) => {
  axios
    .post("/auth/login", data)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      history.push("/home");
    })

    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
      );
      dispatch({
        type: LOGIN_FAIL,
      });
    });
};

export const Register = (data) => (dispatch) => {
  console.log(data);
  axios
    .post("/auth/register", data)
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      history.push("/home");
    })
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")
      );
      dispatch({
        type: REGISTER_FAIL,
      });
    });
};

export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};
