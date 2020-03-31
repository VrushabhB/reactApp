import React, { useReducer } from "react";

import {
  Card,
  CardBody,
  Button,
  CardHeader,
  CardFooter,
  Form
} from "reactstrap";
import * as yup from "yup";

import InputFeild from "../InputFeild/InputFeild";

import "./login.css";
import loginReducer from "./Reducer/LoginReducer";
import { setUserDetails } from "../Login/Actions/LoginActions";

const initialState = {
  email: "",
  password: ""
};

function Login(props) {
  const [state, dispatch] = useReducer(loginReducer, initialState);

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email()
      .required(),
    password: yup.string().required()
  });

  const handleOnChange = e => {
    const { value, name } = e.target;
    let updatedFeildValues = { ...state };
    updatedFeildValues[name] = value;
    dispatch(setUserDetails(updatedFeildValues));
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    validationSchema.isValid(state).then(isValid => {
      console.log("isValid: ", isValid);
    });
  };

  return (
    <div className="login-wrapper">
      <Card>
        <Form onSubmit={handleOnSubmit}>
          <CardHeader>Login</CardHeader>
          <CardBody>
            <InputFeild
              placeholder="Enter Email"
              name="email"
              value={state.email}
              type="email"
              handleOnChange={handleOnChange}
            />
            <InputFeild
              placeholder="Enter password"
              name="password"
              value={state.password}
              type="password"
              handleOnChange={handleOnChange}
            />
          </CardBody>
          <CardFooter className="text-muted">
            <Button type="submit">Login</Button>
          </CardFooter>
        </Form>
      </Card>
    </div>
  );
}

export default Login;
