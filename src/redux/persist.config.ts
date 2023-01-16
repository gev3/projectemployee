import AsyncStorage from "@react-native-async-storage/async-storage";

export const userPersistConfig = {
  key: "auth",
  storage: AsyncStorage,
  whitelist: ["token", "user"],
};


