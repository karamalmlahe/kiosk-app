import { ScrollView, Text, View, SafeAreaView, Image, FlatList, TouchableOpacity, Linking, Alert, Dimensions, ActivityIndicator } from 'react-native'
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
        <ScrollView style={{ backgroundColor: backgroundColor2 }} >
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
          <View style={{ flex: 1, backgroundColor: backgroundColor }}>
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
                      <View style={{ flex: 1, paddingVertical: 20, paddingHorizontal: 10 }}>
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
                                          source={{ uri: product.item.productImages[0].imageSource }}
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

        </ScrollView>
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