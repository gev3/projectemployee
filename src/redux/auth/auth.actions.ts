import authApi from "./auth.api";
import types, { IUser } from "./auth.types";

export const clearUserData = () => ({
    type: types.CLEAR_USER_DATA,
});
//* USER SIGN IN
export const userSignIn = (userData: IUser) => ({
    type: types.USER_SIGN_IN_ASYNC_SUCCESS,
    payload: userData,
});

// Block
// export const handleSetBlock = (id) => async () => {
//     try {
//         await authApi.setBlock(id);
//         return true
//     } catch (error) {
//         return false
//     }
// };




