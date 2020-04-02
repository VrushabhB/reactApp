import React, { useReducer } from "react";

import {
  Card,
  CardBody,
  Button,
  CardHeader,
  CardFooter,
  Form,
  FormGroup
} from "reactstrap";

import * as yup from "yup";

import InputFeild from "../InputFeild/InputFeild";

import "./login.css";

import loginReducer from "./Reducer/LoginReducer";

import {
  userLoginInitiated,
  userLoginSuccess,
  userLoginFailuer,
  resetToInitialState
} from "../Login/Actions/LoginActions";

import Loader from "../Loader/Loader";

import { postApi } from "./Actions/loginApi";

const initialState = {
  isLoading: false,
  token: null,
  error: null
};

function Login(props) {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const { isLoading, error: serverError, token } = state;
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email()
      .required(),
    password: yup.string().required()
  });

  const handleOnSubmit = e => {
    e.preventDefault();
    const userDetails = {},
      formDate = new FormData(e.target);

    userDetails.email = formDate.get("email");
    userDetails.password = formDate.get("password");

    validationSchema.isValid(userDetails).then(isValid => {
      if (isValid) {
        dispatch(userLoginInitiated(userDetails));
        postApi("https://reqres.in/api/login", {
          email: "eve.holt@reqres.in",
          password: "cityslicka"
        }).then(data => {
          if (data.error) {
            dispatch(userLoginFailuer({ error: data.error }));
          } else {
            const { token } = data;
            dispatch(userLoginSuccess({ token }));
          }
        });
      }
    });
  };

  const handleLogout = () => {
    dispatch(resetToInitialState());
  };

  if (token) {
    return (
      <>
        <h1>Login successful</h1>
        <h3>{token}</h3>
        <Button color="danger" onClick={handleLogout}>
          Logout
        </Button>
      </>
    );
  }
  return (
    <div className="login-wrapper">
      <Card>
        <Form onSubmit={handleOnSubmit}>
          <FormGroup>
            <CardHeader>Login</CardHeader>
            <CardBody>
              <InputFeild
                placeholder="Enter Email"
                name="email"
                type="email"
                invalid
              />
              <InputFeild
                placeholder="Enter password"
                name="password"
                type="password"
              />
            </CardBody>
            <CardFooter className="text-muted">
              <Button type="submit">Login</Button>
            </CardFooter>
            <div style={{ color: "red", margin: "1%", textAlign: "center" }}>
              {serverError}
            </div>
          </FormGroup>
        </Form>
        <Loader isLoading={isLoading} />
      </Card>
    </div>
  );
}

export default Login;
