import { Text, View, Image, ActivityIndicator } from 'react-native'
import React from 'react'
import Styles from './style';
import Colors from './../../utilis/AppColors'
import { useSelector } from 'react-redux'

const loadingScreen = () => {

  //redux
  const getIsDarkMode = useSelector((state) => state.userData.isDarkMode);

  //darkMode
  const backgroundColor = getIsDarkMode ? Colors.gray_2 : Colors.white;
  const fontColor = getIsDarkMode ? Colors.white : Colors.gray_2;
  return (
    <View style={[Styles.Container, { backgroundColor: backgroundColor }]}>
      <Image
        style={Styles.loadingImg}
        source={require('./../../../assets/images/loadingImg.png')}
      />
      <Text style={[Styles.loadingText,{color:fontColor}]}>KIOSK APP</Text>
      <ActivityIndicator size="large" color={fontColor} />

    </View>
  )
}

export default loadingScreen
