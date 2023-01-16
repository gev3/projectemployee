import types, {AuthType, MixAuthTypes} from "./auth.types";
import {deleteEmploy} from "./auth.utils";

const INITIAL_STATE: AuthType = {
    user: null,
    token: "",
    selectedEmployees: [],
};

const authReducer = (state = INITIAL_STATE, action: { type: string; payload: MixAuthTypes }) => {
    const {type, payload} = action;

    switch (type) {
        // User login
        case types.USER_SIGN_IN_ASYNC_SUCCESS:
            return {...state, user: payload};
        // Set token
        case types.SET_TOKEN:
            return {...state, token: payload};
        // Set employee to local storage
        case types.SET_SELECTED_EMPLOYEE:
            return {...state, selectedEmployees: [...state.selectedEmployees, payload]};
        // Remove employee from local storage
        case types.DELETE_SELECTED_EMPLOYEE:
            return {...state, selectedEmployees: deleteEmploy(state.selectedEmployees, payload)};
        // Logout
        case types.CLEAR_USER_DATA:
            return INITIAL_STATE;
        default:
            return state;
    }
};

export default authReducer;
