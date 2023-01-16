import authApi from "./auth.api";
import types, {IUser} from "./auth.types";
import {IEmployee} from "../../helpers/helpers";


//* USER SIGN IN
export const userSignIn = (userData: IUser) => ({
    type: types.USER_SIGN_IN_ASYNC_SUCCESS,
    payload: userData,
});
//* SET EMPLOYEE
export const handleSetEmployee = (employee: IEmployee) => ({
    type: types.SET_SELECTED_EMPLOYEE,
    payload: employee,
});

//* SET TOKEN
export const setUserToken = (token: number | string) => ({
    type: types.SET_TOKEN,
    payload: token,
});

//* DELETE EMPLOYEE
export const onDeleteEmployee = (employee: IEmployee) => ({
    type: types.DELETE_SELECTED_EMPLOYEE,
    payload: employee,
});

//* LOGOUT
export const clearUserData = () => ({
    type: types.CLEAR_USER_DATA,
});



