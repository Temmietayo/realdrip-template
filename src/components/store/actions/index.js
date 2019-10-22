import axios from "axios";
import * as authActions from "./authActions";

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

export const signinWardUser = userDetails => dispatch => {
  dispatch({ type: authActions.ADDING_USER_STARTED });
  return axios
    .post(`${apiBaseUrl}/ward`, userDetails)
    .then(response => {
      dispatch({
        type: authActions.ADDING_USER_SIGNIN,
        payload: response.data
      });
    })
    .catch(err => {
      const error = err.response ? err.response.data : err.message;
      dispatch({ type: authActions.ADDING_USER_REJECTED, payload: error });
    });
};
