import { ScrollView, Text, View, SafeAreaView, Image, FlatList, TouchableOpacity, ActivityIndicator, RefreshControl, Animated } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as storeActions from '../../../store/actions'
// import { ScrollView } from 'react-native-virtualized-view';
// import WavyBackground from "react-native-wavy-background";
import Styles from './style'
import Colors from './../../utilis/AppColors'
import StoreInfo from './../../components/Stores/storeInfo'
import Product from './../../components/Stores/product'


//icons
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

import TopBarBackNav from '../../components/TopBarBackNav';

//functions
import { reduceTextSize, formatter } from './../../publicFuncs'

import ButtonShowAllProduct from '../../components/Stores/buttonShowAllProducts'


export const CategoriesScreen = (props) => {
  const getIsDarkMode = useSelector((state) => state.userData.isDarkMode);
  const [isStoreOpen, setStoreOpen] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [categoriesWithProducts, setCategoriesWithProducts] = useState({});

  //darkMode
  const backgroundColor = getIsDarkMode ? Colors.gray_2 : Colors.white;
  const backgroundColor2 = getIsDarkMode ? Colors.gray_3 : Colors.gray_10;
  const backgroundColor3 = getIsDarkMode ? Colors.gray_2 : '#fffffb';
  const fontColor = getIsDarkMode ? Colors.white : Colors.gray_2;

  //redux
  const dispatch = useDispatch();
  const getCategoriesWithProductsByStoreId = useCallback(async () => {
    let CategoriesWithProducts = storeActions.get_CategoriesWithProductsByStoreId_action(props.route.params.id);
    try {
      await dispatch(CategoriesWithProducts);
      setCategoriesWithProducts(getCategoriesWithProducts)

    } catch (error) {
      console.log(error);

    }
  }, [dispatch, storeActions.get_CategoriesWithProductsByStoreId_action(props.route.params.id)])

  const getCategoriesWithProducts = useSelector((state) => state.storesData?.categoriesWithProductsOfStore);



  useEffect(async () => {
    setIsLoading(true);
    await getCategoriesWithProductsByStoreId();
    setIsLoading(false);
  }, [])
  const contactInfo = props.route.params.contactInfo;


  const reduceArraySize = (array, size) => {
    if (array.length > size) {
      return array.slice(0, size)
    }
    return array
  }
  const onRefresh = async () => {
    setRefreshing(true);
    await getCategoriesWithProductsByStoreId();
    setRefreshing(false);
  }






  return (
    <SafeAreaView style={[Styles.SafeAreaView, { backgroundColor: backgroundColor2 }]}>
      <View style={[Styles.Container, { backgroundColor: backgroundColor }]}>
        <View style={[Styles.TopBarInfo, { backgroundColor: backgroundColor2 }]}>
          <TopBarBackNav navigation={props.navigation} fontColor={fontColor} storeName={props.route.params.storeName} isStoreOpen={isStoreOpen} />
        </View>

        <ScrollView style={{ backgroundColor: backgroundColor }} refreshControl={
          <RefreshControl
            style={{ backgroundColor: backgroundColor2 }}
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={fontColor}
          />
        }
        >
          <StoreInfo
            setStoreOpen={setStoreOpen}
            storeLogo={props.route.params.storeLogo}
            workingHours={props.route.params.workingHours}
            storeDescription={props.route.params.storeDescription}
            backgroundColor2={backgroundColor2}
            backgroundColor3={backgroundColor3}
            fontColor={fontColor}
            contactInfo={contactInfo} />
          <View style={{ backgroundColor: backgroundColor }}>

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
                      <View style={{ flex: 1, paddingVertical: 20 }}>
                        {
                          getCategoriesWithProducts.categories?.map((category, index) =>
                            category.products.length > 0 ? (<View style={Styles.FlatListCategory} key={index}>
                              <View style={Styles.CategoryDetails}>
                                <Text style={[Styles.categoryName, { color: fontColor }]}>{category.category.categoryName?.toUpperCase()}</Text>
                              </View>
                              <View style={Styles.ProductsContainer}>
                                <ScrollView
                                  disableIntervalMomentum
                                  horizontal
                                  showsHorizontalScrollIndicator={false}
                                  style={{ flexDirection: 'row' }}>
                                  {
                                    reduceArraySize(category.products, 3).map((product, index) => (

                                      <TouchableOpacity style={[Styles.FlatListProudct, { backgroundColor: backgroundColor2 }]} key={index} onPress={() => props.navigation.navigate('Product', { productImage: product.productImages, productName: product.productName, productPrice: product.price })}>
                                        <Product fontColor={fontColor} productImage={product.productImages[0].imageSource} productName={product.productName} productPrice={product.price} />
                                      </TouchableOpacity>
                                    ))
                                  }
                                  {
                                    reduceArraySize(category.products, 3)?.length != category.products?.length ?
                                      (
                                        <TouchableOpacity onPress={() => props.navigation.navigate("Products", { storeName: props.route.params.storeName, isStoreOpen: isStoreOpen, data: getCategoriesWithProducts.categories?.find((c) => c.category._id == category.category._id) })}>
                                          <ButtonShowAllProduct backgroundColor2={backgroundColor2} fontColor={fontColor} />
                                        </TouchableOpacity>)
                                      :
                                      (<></>)
                                  }

                                </ScrollView>
                              </View>
                            </View>) : (<View key={index}></View>)
                          )}
                      </View>
                    )
                    :
                    (
                      < ></>
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



        // {
        //   getCategoriesWithProducts.categories.map((category, index) =>
        //   (
        //     <View key={index}>
        //       {
        //         category.products.length > 0 ? (<View style={Styles.FlatListCategory} >
        //           <View style={Styles.CategoryDetails}>
        //             <Text style={[Styles.categoryName, { color: fontColor }]}>{category.category.categoryName?.toUpperCase()}</Text>
        //           </View>

        //           <View style={Styles.ProductsContainer}>

        //             <FlatList

        //               ListFooterComponent={
        //                 reduceArraySize(category.products, 3)?.length != category.products.length ?
        //                   <ButtonShowAllProduct backgroundColor={backgroundColor} backgroundColor2={backgroundColor2} fontColor={fontColor} />
        //                   : (<></>)}
        //               showsHorizontalScrollIndicator={false}
        //               horizontal
        //               data={reduceArraySize(category.products, 3)}
        //               keyExtractor={index => index._id}
        //               renderItem={product => (
        //                 <View style={[Styles.FlatListProudct, { backgroundColor: backgroundColor2 }]}>
        //                   <Image
        //                     style={Styles.productImg}
        //                     resizeMode={'cover'}
        //                     source={{ uri: product.item.productImages[0].imageSource }}
        //                   />
        //                   <View style={[Styles.productInfo]}>
        //                     <View style={[Styles.productInfoNamePrice]}>
        //                       <Text style={[Styles.proudctName, { color: fontColor }]}>{reduceTextSize(product.item.productName, 12)}</Text>
        //                       <Text style={[Styles.proudctPrice]}>{formatter.format(product.item.price)}</Text>
        //                     </View>
        //                     <View style={[Styles.productInfoAddToCart]}>
        //                       <TouchableOpacity style={[Styles.AddToCart]}>
        //                         <FontAwesome5 name="cart-plus" size={15} color={fontColor} />
        //                       </TouchableOpacity>
        //                     </View>

        //                   </View>
        //                 </View>

        //               )}
        //             />
        //           </View>
        //         </View>) : (<></>)
        //       }

        //     </View>
        //   ))
        // }