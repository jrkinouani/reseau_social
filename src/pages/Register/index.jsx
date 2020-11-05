import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button } from 'react-bootstrap';

import {Authenticate} from "redux/authenticate/Authenticate";


const Register = () => {
    const dispatch = useDispatch();
    const [username, SetUsername] = useState("");
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");

    const submitForm = () => {
        dispatch(Authenticate(username, email, password));
    };
    
    return (
      <div className="container">
      <Form>
      <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text"
              placeholder="Username"
              value={username}
              onChange={event => SetUsername(event.target.value)} />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="text"
              value={email}
              placeholder="Email"
              onChange={event => SetEmail(event.target.value)}
            />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"
              placeholder="Password"
             value={password}
             onChange={event => SetPassword(event.target.value)} />
        </Form.Group>
        
        <Button variant="primary" onClick={submitForm}>
          Registration
        </Button>
      </Form>
      </div>
    )
}

export default Register;

