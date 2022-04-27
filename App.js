import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React,{useState} from "react";

//Fonts
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
const loadFonts = () => {
  return Font.loadAsync({
    'Cairo-Black' : require('./assets/fonts/Cairo-Black.ttf'),
    'Cairo-Bold' : require('./assets/fonts/Cairo-Bold.ttf'),
    'Cairo-ExtraBold' : require('./assets/fonts/Cairo-ExtraBold.ttf'),
    'Cairo-ExtraLight' : require('./assets/fonts/Cairo-ExtraLight.ttf'),
    'Cairo-Light' : require('./assets/fonts/Cairo-Light.ttf'),
    'Cairo-Medium' : require('./assets/fonts/Cairo-Medium.ttf'),
    'Cairo-Regular' : require('./assets/fonts/Cairo-Regular.ttf'),
    'Cairo-SemiBold' : require('./assets/fonts/Cairo-SemiBold.ttf')
  });
}

//redux
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import reducers from "./store/reducers";
const rootReducer = combineReducers({
  allStores: reducers,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));


//navigation
import { NavigationContainer } from "@react-navigation/native";

import { BottomTab } from "./src/navigation";

export default function App() {
  const[isFontLoading,setIsFontLoading]=useState(false);

  if(!isFontLoading){
    return(
      <AppLoading
       startAsync={loadFonts}
       onFinish={()=> setIsFontLoading(true)}
       onError={console.log()} />
    )
  }
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
