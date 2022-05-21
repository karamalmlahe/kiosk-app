import { Text, View, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { ImageSlider } from "react-native-image-slider-banner";
import Styles from './style';
import Colors from './../../utilis/AppColors'
import { useSelector } from 'react-redux';
import style from './style';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
export const ProductScreen = (props) => {
  //darkMode
  const getIsDarkMode = useSelector((state) => state.userData.isDarkMode);
  const backgroundColor = getIsDarkMode ? Colors.gray_2 : Colors.white;
  const backgroundColor2 = getIsDarkMode ? Colors.gray_3 : Colors.gray_10;
  const fontColor = getIsDarkMode ? Colors.white : Colors.gray_2;

  props.route.params.productImage?.map(i => i.img = i.imageSource);

  return (

    <View style={{ flex: 1, backgroundColor: backgroundColor2 }}>
      <StatusBar
        barStyle={getIsDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundColor2}

      />
      <ImageSlider
        caroselImageStyle={[Styles.caroselImage]}
        data={props.route.params.productImage}
        autoPlay={false}
        closeIconColor={fontColor}
        indicatorContainerStyle={{ top: 25, color: 'red' }}
        activeIndicatorStyle={{ backgroundColor: Colors.green }}
        inActiveIndicatorStyle={{ backgroundColor: fontColor }}
      />
      <View style={[Styles.productInfo, { backgroundColor: backgroundColor }]}>

      </View>
      {/* <View style={style.ButtonsUp}> */}
      <TouchableOpacity style={[style.ButtonUp, { backgroundColor: backgroundColor, left: 10 }]} onPress={() => props.navigation.goBack()}>
        <MaterialIcons name="arrow-back-ios" size={28} color={fontColor} style={{ position: 'absolute', left: '30%' }} />
      </TouchableOpacity>
      <TouchableOpacity style={[style.ButtonUp, { backgroundColor: backgroundColor, right: 10 }]}>
        <Text>aaa</Text>
      </TouchableOpacity>
      {/* </View> */}

    </View>
  )
}


export const screenOptions = navData => {
  return {
    headerTitle: 'Product',
    headerShown: false
  }
}