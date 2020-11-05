import { fetchRequest, fetchSuccess, fetchFailure } from "./action";
import Cookies from "js-cookie";

export const Authenticate = (username, email, password) => {
  const data = {
    username,
    email,
    password
  };

  return dispatch => {
    dispatch(fetchRequest());
    fetch("https://my-pasteque-space.herokuapp.com/auth/local/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(response => {
        if (response) {
          console.log(response);
          dispatch(fetchSuccess(response));
          Cookies.set("token", response.jwt);
        } else {
          dispatch(fetchFailure(response.message));
        }
      });
  };
};