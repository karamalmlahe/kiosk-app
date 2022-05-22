import { StyleSheet, Platform, StatusBar, Dimensions } from 'react-native';
import Colors from './../../utilis/AppColors'
const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    //SafeAreaView for Android
    SafeAreaView: {
        // paddingTop: (Platform.OS === "android" ? StatusBar.currentHeight - 10 : 0),
    },
    Container: {
        height: '100%',
        width: '100%',
    },
    TopBarInfo: {
        height: 60,
    },


    //Categories and products
    FlatListCategory:{
        width:'100%',

    },
    CategoryDetails:{
        paddingHorizontal: 10,
        paddingBottom:5
    },
    categoryName:{
        fontSize:20,
        fontFamily: 'Cairo-Medium',
    },
    MoreProductsLink:{
        textDecorationLine: 'underline',
        color: Colors.blue_click,
    },
    ProductsContainer:{
        width:'100%',
        paddingBottom:20
    },
    FlatListProudct:{
        marginHorizontal:5,
        width:windowWidth/2.12,
        borderRadius:8,
    },
})