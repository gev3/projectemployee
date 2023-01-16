import {combineReducers} from "redux";
import {persistReducer} from "redux-persist";
import { userPersistConfig} from "./persist.config";

// REDUCERS
import authReducer from "./auth/auth.reducer";

const rootReducer = combineReducers({
    auth: persistReducer(userPersistConfig, authReducer),
});

export default rootReducer;
