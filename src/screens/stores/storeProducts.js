import { Text, View, SafeAreaView, ScrollView, FlatList, TouchableOpacity, RefreshControl } from 'react-native'
import React, { useState, useCallback, useEffect } from 'react'
import Styles from './style'
import Colors from './../../utilis/AppColors'
import { useDispatch, useSelector } from 'react-redux'
import * as storeActions from '../../../store/actions'
import TopBarBackNav from './../../components/TopBarBackNav';
import SearchInput from './../../components/Stores/searchInput'
import Product from './../../components/Stores/product'
import ImageComponent from './../../components/image'
// import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';

export const ProductsScreen = (props) => {
    const getCategoriesWithProducts = useSelector((state) => state.storesData?.categoriesWithProductsOfStore);


    const [Category, setCategory] = useState(props.route.params.data)
    // console.log(Category);
    const [searchText, setSearchText] = useState('');
    const [refreshing, setRefreshing] = useState(false);
    //darkMode
    const getIsDarkMode = useSelector((state) => state.userData.isDarkMode);
    const backgroundColor = getIsDarkMode ? Colors.gray_2 : Colors.white;
    const backgroundColor2 = getIsDarkMode ? Colors.gray_3 : Colors.gray_10;
    const fontColor = getIsDarkMode ? Colors.white : Colors.gray_2;

    const filteredData =
        Category.products?.filter((item) => {
            return Object.values(item.productName).join('').toLowerCase().includes(searchText.toLowerCase())
        })

    //redux
    const dispatch = useDispatch();
    const getCategoriesWithProductsByStoreId = useCallback(async () => {
        let CategoriesWithProducts = await storeActions.get_CategoriesWithProductsByStoreId_action(Category.category.storeId);
        try {
            await dispatch(CategoriesWithProducts)

        } catch (error) {
            console.log(error);

        }
    }, [dispatch, storeActions.get_CategoriesWithProductsByStoreId_action(Category.category.storeId)])


    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        getCategoriesWithProductsByStoreId();
        setCategory(getCategoriesWithProducts.categories?.find((c) => c.category._id == Category.category?._id))
        setRefreshing(false);
    }, [getCategoriesWithProductsByStoreId()])
    return (
        <SafeAreaView style={[Styles.SafeAreaView, { backgroundColor: backgroundColor2, flex: 1 }]}>
            <View style={[Styles.Container, { backgroundColor: backgroundColor }]}>
                <View style={[Styles.TopBarInfo, { backgroundColor: backgroundColor2 }]}>
                    <TopBarBackNav navigation={props.navigation} fontColor={fontColor} storeName={props.route.params.storeName} isStoreOpen={props.route.params.isStoreOpen} />
                </View>
                <ScrollView style={{ flex: 1 }} refreshControl={
                    <RefreshControl
                        style={{ backgroundColor: backgroundColor2 }}
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        tintColor={fontColor}
                    />}>
                    <View style={Styles.CategoryImgAndName}>
                        <ImageComponent
                            style={Styles.CategoryImg}
                            resizeMode={'cover'}
                            source={{ uri: Category.category?.categoryImage }}
                            fontColor={fontColor} />
                        <View style={Styles.CategoryViewUp}>
                            <Text style={Styles.CategoryName}> {props.route.params.categoryName}</Text>
                        </View>
                    </View>
                    <View style={{ paddingLeft: 12, backgroundColor: 'white', height: 67, justifyContent: 'center', backgroundColor: backgroundColor, paddingVertical: 5 }} >
                        <SearchInput setSearch={setSearchText} searchText={searchText} placeholder={"Enter product name"} />
                    </View>
                    <View style={{ flex: 1 }}>
                        <ScrollView
                            contentContainerStyle={{ flexGrow: 1 }}
                            horizontal
                            scrollEnabled={false}>
                            <FlatList

                                scrollEnabled={false}
                                data={filteredData}
                                numColumns={2}
                                keyExtractor={item => item._id}
                                renderItem={product => (
                                    <TouchableOpacity style={[Styles.FlatListProudct, { backgroundColor: backgroundColor2, marginVertical: 10 }]} onPress={() => props.navigation.navigate('Product', { productImage: product.item.productImages, productName: product.item.productName, productPrice: product.item.price })}>
                                        <Product fontColor={fontColor} productImage={product.item.productImages[0].imageSource} productName={product.item.productName} productPrice={product.item.price} />
                                    </TouchableOpacity>
                                )}
                            />
                        </ScrollView>
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
