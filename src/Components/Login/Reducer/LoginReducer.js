import loginActions from "../Actions/LoginActions";

const initialState = {
  isLoading: false,
  token: null,
  error: ""
};

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case loginActions.userLoginInitiated:
      return { ...state, ...action.payload, isLoading: true };
    case loginActions.userLoginSuccess:
      return { ...state, ...action.payload, isLoading: false };
    case loginActions.userLoginFailuer:
      return { ...state, ...action.payload, isLoading: false };

    case loginActions.resetToInitialState:
      return initialState;
    default:
      throw new Error();
  }
}

export default loginReducer;
