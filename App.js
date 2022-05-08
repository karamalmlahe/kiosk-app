import React, { useState } from "react";
//BottomTab
import Home from "./src/home"
//Fonts
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
const loadFonts = () => {
  return Font.loadAsync({
    'Cairo-Black': require('./assets/fonts/Cairo-Black.ttf'),
    'Cairo-Bold': require('./assets/fonts/Cairo-Bold.ttf'),
    'Cairo-ExtraBold': require('./assets/fonts/Cairo-ExtraBold.ttf'),
    'Cairo-ExtraLight': require('./assets/fonts/Cairo-ExtraLight.ttf'),
    'Cairo-Light': require('./assets/fonts/Cairo-Light.ttf'),
    'Cairo-Medium': require('./assets/fonts/Cairo-Medium.ttf'),
    'Cairo-Regular': require('./assets/fonts/Cairo-Regular.ttf'),
    'Cairo-SemiBold': require('./assets/fonts/Cairo-SemiBold.ttf')
  });
}
//redux
import { Provider } from "react-redux";
import store from './store/store'

export default function App() {
  const [isFontLoading, setIsFontLoading] = useState(false);
  if (!isFontLoading) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setIsFontLoading(true)}
        onError={console.log()} />
    )
  }
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
