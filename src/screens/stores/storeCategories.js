import { Text, View, SafeAreaView, Image, FlatList, TouchableOpacity, Linking, Alert, Dimensions, ActivityIndicator } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as storeActions from '../../../store/actions'
// import WavyBackground from "react-native-wavy-background";
import Styles from './style'
import Colors from './../../utilis/AppColors'
import { showLocation } from 'react-native-map-link'


//icons
import Ionicons from "react-native-vector-icons/Ionicons"
import Entypo from "react-native-vector-icons/Entypo"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

import TopBarBackNav from '../../components/TopBarBackNav';
import WorkingHours from '../../components/WorkingHours'

export const CategoriesScreen = (props) => {
  const getIsDarkMode = useSelector((state) => state.userData.isDarkMode);
  const [isStoreOpen, setStoreOpen] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const windowWidth = Dimensions.get('window').width;
  //darkMode
  const backgroundColor = getIsDarkMode ? Colors.gray_2 : Colors.white;
  const backgroundColor2 = getIsDarkMode ? Colors.gray_3 : Colors.gray_10;
  const backgroundColor3 = getIsDarkMode ? Colors.gray_2 : Colors.white;
  const fontColor = getIsDarkMode ? Colors.white : Colors.gray_2;

  //redux
  const dispatch = useDispatch();
  const getCategoriesWithProductsByStoreId = useCallback(async () => {
    let CategoriesWithProducts = storeActions.get_CategoriesWithProductsByStoreId_action(props.route.params.id);
    setIsLoading(true);
    try {
      await dispatch(CategoriesWithProducts);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, [setIsLoading, dispatch, storeActions.get_CategoriesWithProductsByStoreId_action(props.route.params.id)])

  const getCategoriesWithProducts = useSelector((state) => state.storesData?.categoriesWithProductsOfStore);
  // console.log('====================================');
  // console.log(getCategoriesWithProducts.categories[5].products);
  // console.log('====================================');
  useEffect(() => {
    getCategoriesWithProductsByStoreId();
  }, [])
  const contactInfo = props.route.params.contactInfo;

  const Linked = () => {
    Linking.canOpenURL(`mailto:${contactInfo.email}`)
      .then(supported => {
        if (!supported) {
          return Alert.alert(
            "Kiosk App",
            "Your device does not support",
          );
        } else {
          return Linking.openURL(`mailto:${contactInfo.email}`)
        }
      })
      .catch(err => {
        console.error('An error occurred', err)
      })
  }
  return (
    <SafeAreaView style={[Styles.SafeAreaView, { backgroundColor: backgroundColor2 }]}>
      <View style={[Styles.Container, { backgroundColor: backgroundColor }]}>
        <View style={[Styles.TopBarInfo, { backgroundColor: backgroundColor2 }]}>
          <TopBarBackNav navigation={props.navigation} fontColor={fontColor} storeName={props.route.params.storeName} isStoreOpen={isStoreOpen} />
        </View>
        <View style={[Styles.StoreInfo, { backgroundColor: backgroundColor2 }]}>
          <View style={{ height: 'auto', flexDirection: 'row' }}>
            <View style={[Styles.StoreImgView, { backgroundColor: backgroundColor3 }]}>
              <Image
                style={Styles.StoreImg}
                resizeMode={'cover'}
                source={{ uri: props.route.params.storeLogo }}
              />
            </View>
            <View style={Styles.StoreDescription}>
              <Text style={[Styles.StoreDescriptionText, { color: fontColor }]}>Description : {"\n"}<Text style={{ fontFamily: 'Cairo-Light' }}>{props.route.params.storeDescription}</Text></Text>
              <Text style={[Styles.StoreDescriptionText, { color: fontColor }]}>Address : {"\n"}<Text style={{ fontFamily: 'Cairo-Light' }}>{contactInfo.address} | {contactInfo.city}</Text></Text>
              {
                props.route.params.workingHours?.length > 0 ? (<WorkingHours workingHours={props.route.params.workingHours} fontColor={fontColor} setStoreOpen={setStoreOpen} />) : (<></>)
              }

            </View>
          </View>

          <View style={{ flexDirection: 'row', width: '100%', paddingTop: 10, justifyContent: 'space-between' }}>
            <TouchableOpacity onPress={() => Linking.openURL(`tel:${contactInfo.mobile}`)}>
              <View style={[Styles.infoIcons, { backgroundColor: Colors.light_green }]}>
                <Ionicons name="call" size={28} color={fontColor} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={Linked}>
              <View style={[Styles.infoIcons, { backgroundColor: Colors.light_blue }]}>
                <Entypo name="mail" size={28} color={fontColor} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => showLocation({
              latitude: contactInfo.latitude,
              longitude: contactInfo.longtitude,
            })
            } >
              <View style={[Styles.infoIcons, { backgroundColor: Colors.wazeBack }]}>
                <MaterialCommunityIcons name="waze" size={28} color={fontColor} />
              </View>
            </TouchableOpacity>

          </View>
        </View>
        <View style={{ flex: 1 }}>
          {
            isLoading ?
              (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <ActivityIndicator size={'large'} color={fontColor} />
                </View>
              )
              :
              (
                getCategoriesWithProducts.categories ?
                  (
                    <View style={{ flex: 1, paddingVertical: 20 ,paddingHorizontal:10}}>
                      <FlatList
                        scrollEnabled={false}
                        data={getCategoriesWithProducts.categories}
                        keyExtractor={item => item.category._id}
                        renderItem={category => (

                          category.item.products.length > 0 ? (<View style={Styles.FlatListCategory}>
                            <View style={Styles.CategoryDetails}>
                              <Text style={[Styles.categoryName, { color: fontColor }]}>{category.item.category.categoryName?.toUpperCase()}</Text>
                              <Text style={Styles.MoreProductsLink}>View All </Text>
                            </View>

                            <View style={Styles.ProductsContainer}>
                              <FlatList
                                horizontal
                                data={category.item.products}
                                keyExtractor={index => index._id}
                                renderItem={product => (
                                  <View style={[Styles.FlatListProudct, { backgroundColor: backgroundColor2 }]}>
                                    <View style={[Styles.productImgContainer]}>
                                      <Image
                                        style={Styles.productImg}
                                        resizeMode={'cover'}
                                        source={{ uri: `data:image/jpeg;base64,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`}}
                                      />
                                    </View>
                                    <Text style={[Styles.proudctName, { color: fontColor }]}>{product.item.productName}</Text>
                                  </View>

                                )}
                              />
                            </View>
                          </View>) : (<></>)



                        )}

                      />
                    </View>

                    // <Text>{getCategoriesWithProducts.categories[0].categoryName}</Text>
                  )
                  :
                  (
                    <></>
                  )
              )
          }

        </View>


      </View>

    </SafeAreaView >
  )
}
export const screenOptions = navData => {
  return {
    headerTitle: 'Categories',
    headerShown: false
  }
}








{/* <View style={{
          height: 40, width: '100%', position: 'absolute',top:'10%'}}>
          <WavyBackground
            height={1000}
            width={windowWidth/3.8}
            amplitude={20}
            frequency={5.3}
            offset={50}
            color={fontColor}
            bottom
          />
        </View> */}