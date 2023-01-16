import axios, { AxiosRequestConfig } from "axios";
import { IStore } from "../redux/auth/auth.types";
import { store } from "../redux/store";

// Checking if an application is in development is used by the dev.com URL,
// once released it is automatically changed by live.com
export const baseURL = `https://${__DEV__ ? "dev.com" : "live.com"}/api/v1`;

const instance = axios.create({
  baseURL: baseURL,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  }
});

// AXIOS GLOBAL CONFIG
instance.interceptors.request.use((request: AxiosRequestConfig | any) => {
  const reduxStore: IStore = store.getState();
  const token = reduxStore.auth?.token;
  if (token) {
    request.headers ["Authorization"] = "Bearer " + token;
  }
  return request;
});

export default instance;

