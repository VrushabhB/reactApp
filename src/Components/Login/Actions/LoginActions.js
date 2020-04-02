const loginActions = {
  userLoginInitiated: "userLoginInitiated",
  userLoginSuccess: "userLoginSuccess",
  userLoginFailuer: "userLoginFailed",
  resetToInitialState: "resetToInitialState"
};

export const userLoginInitiated = param => {
  return {
    type: loginActions.userLoginInitiated,
    payload: param
  };
};

export const userLoginSuccess = param => {
  console.log("param: ", param);
  return {
    type: loginActions.userLoginSuccess,
    payload: param
  };
};

export const userLoginFailuer = param => {
  console.log("param: ", param);
  return {
    type: loginActions.userLoginFailuer,
    payload: param
  };
};

export const resetToInitialState = param => {
  return {
    type: loginActions.resetToInitialState,
    payload: param
  };
};

export default loginActions;
