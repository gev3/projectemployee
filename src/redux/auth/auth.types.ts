import {IEmployee} from "../../helpers/helpers";

const types = {
    USER_SIGN_IN_ASYNC_SUCCESS: "auth/USER_SIGN_IN_ASYNC_SUCCESS",
    SET_TOKEN: "auth/SET_TOKEN",
    SET_SELECTED_EMPLOYEE: "auth/SET_SELECTED_EMPLOYEE",
    DELETE_SELECTED_EMPLOYEE: "auth/DELETE_SELECTED_EMPLOYEE",
    CLEAR_USER_DATA: "auth/CLEAR_USER_DATA",
};

export default types;

export type MixAuthTypes = IUser & string & IEmployee & IEmployee[]

export interface IUser {
    image: string,
    first_name: string,
    last_name: string,
    location?: { lat: string | number, lng: string | number };
    job_title: string
    department: string;
    country?: string;
    city?: string;
}

export type AuthType = {
    user?: IUser | null,
    token?: string,
    selectedEmployees: IEmployee[]
}

export interface IStore {
    auth: AuthType
}
