import instance from "../../api/api";
import { IUser } from "./auth.types";

const authApi = {
  // auth API
  handleSignIn(data: { email: string, password: string }) {
    return instance.post(`auth/register`, data);
  },
  handleSignUp(data: IUser) {
    return instance.post(`auth/login`, data);
  }


};

export default authApi;
