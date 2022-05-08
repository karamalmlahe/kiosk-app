import { Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import WavyBackground from "react-native-wavy-background";
import Styles from './style'
import Colors from './../../utilis/AppColors'

import TopBarBackNav from '../../components/TopBarBackNav';
import WorkingHours from '../../components/WorkingHours'

export const CategoriesScreen = (props) => {

  const getIsDarkMode = useSelector((state) => state.userData.isDarkMode);
  //darkMode
  const backgroundColor = getIsDarkMode ? Colors.gray_2 : Colors.white;
  const backgroundColor2 = getIsDarkMode ? Colors.gray_3 : Colors.gray_10;
  const backgroundColor3 = getIsDarkMode ? Colors.gray_2 : Colors.white;
  const fontColor = getIsDarkMode ? Colors.white : Colors.gray_2;
  console.log(props);
  return (
    <SafeAreaView style={[Styles.SafeAreaView, { backgroundColor: backgroundColor2 }]}>
      <View style={[Styles.Container, { backgroundColor: backgroundColor }]}>
        <View style={[Styles.TopBarInfo, { backgroundColor: backgroundColor2 }]}>
          <TopBarBackNav navigation={props.navigation} fontColor={fontColor} storeName={props.route.params.storeName} />
        </View>
        <View style={[Styles.StoreInfo, { backgroundColor: backgroundColor2 }]}>
          <View style={{height:'80%',flexDirection: 'row',alignItems: 'center'}}>
            <View style={[Styles.StoreImgView, { backgroundColor: backgroundColor3 }]}>
              <Image
                style={Styles.StoreImg}
                resizeMode={'cover'}
                source={{ uri: props.route.params.storeLogo }}
              />
            </View>
            <View style={Styles.StoreDescription}>
              <Text style={[Styles.StoreDescriptionText, { color: fontColor }]}>Description : {"\n"}<Text style={{ fontFamily: 'Cairo-Light' }}>{props.route.params.storeDescription}</Text></Text>
              {
                props.route.params.workingHours?.length > 0 ? (<WorkingHours workingHours={props.route.params.workingHours} fontColor={fontColor} />) : (<></>)
              }

            </View>
          </View>

          {/* <WavyBackground
            height={1100}
            width={1200}
            amplitude={70}
            frequency={1}
            offset={150}
            color={fontColor}
            bottom
          /> */}
        </View>
      </View>

    </SafeAreaView>
  )
}
export const screenOptions = navData => {
  return {
    headerTitle: 'Categories',
    headerShown: false
  }
}