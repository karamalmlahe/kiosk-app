import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";

//redux
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import reducers from "./store/reducers";
const rootReducer = combineReducers({
  allStors: reducers,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));


//navigation
import { NavigationContainer } from "@react-navigation/native";

import { BottomTab } from "./src/navigation";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTab />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
