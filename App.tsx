import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Toast from "react-native-toast-message";
import { persistor, store } from "./src/redux/store";
import Navigation from "./src/navigation/root-navigation/root-navigation";
import { Provider as PaperProvider } from "react-native-paper";

const App = () => {
  return (
    <PaperProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Navigation />
          <Toast />
        </PersistGate>
      </Provider>
    </PaperProvider>
  );
};


export default App;
