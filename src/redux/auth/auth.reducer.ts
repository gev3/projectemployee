import types, { IUser, MixAuthTypes } from "./auth.types";

const INITIAL_STATE: { user: IUser | {}, token: string } = {
  user: {},
  token: ""
};

const authReducer = (state = INITIAL_STATE, action: { type: string; payload: MixAuthTypes }) => {
  const { type, payload } = action;

  switch (type) {
    // user login
    case types.USER_SIGN_IN_ASYNC_SUCCESS:
      return { ...state, user: payload };
    // Token login
    case types.TOKEN_SIGN_IN_:
      return { ...state, token: payload };
    // // Logout
    // case types.CLEAR_USER_DATA:
    //   return INITIAL_STATE;
    default:
      return state;
  }
};

export default authReducer;
