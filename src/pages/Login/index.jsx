import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from "react-router-dom"
import { fetchRequest, fetchSuccess, fetchFailure } from "../../redux/authenticate/action";
import Cookies from "js-cookie";

const Login = () => {
  const isLogin = useSelector(state => state.user!==null);
  const history = useHistory();
  const [inputs, setInputs] = useState({
    identifier: "",
    password: ""
  });
  
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));
  };

  const submitForm = () => {
    dispatch(fetchRequest())
    fetch("https://my-pasteque-space.herokuapp.com/auth/local", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(inputs)
    })
      .then(response => response.json())
      .then(response => {
        if (response) {
          console.log(response);
          dispatch(fetchSuccess(response.user));
          Cookies.set("token", response.jwt);
        } else {
          dispatch(fetchFailure());
        }
      });
  };

  useEffect(() => {
    if ( isLogin ) {
      history.push("/profile");
    }
  },[isLogin])

  return (
    <div>
      <input
        type="text"
        name="identifier"
        value={inputs.identifier}
        placeholder="Email"
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={inputs.password}
        onChange={handleChange}
      />
      <button onClick={submitForm} className="m-2 btn btn-primary">
        Login
      </button>
    </div>
  );
};

export default Login;