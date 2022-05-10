import { StyleSheet, Platform, StatusBar, Dimensions } from 'react-native';
import Colors from './../../utilis/AppColors'
const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    //SafeAreaView for Android
    SafeAreaView: {
        paddingTop: (Platform.OS === "android" ? StatusBar.currentHeight - 10 : 0),
    },
    Container: {
        height: '100%',
        width: '100%',
    },
    TopBarInfo: {
        height: '7%',
    },
    StoreInfo: {
        // height:'28%',
        alignItems: 'center',
        paddingHorizontal: 10,
        justifyContent: 'center',
        paddingBottom: 10,

    },
    StoreImgView: {
        height: windowWidth / 2.5,
        justifyContent: 'center',
        width: windowWidth / 2.5,
        alignItems: 'center',
        borderRadius: 20
    },
    StoreImg: {
        height: '80%',
        width: '80%',
        borderRadius: 20
    },
    StoreDescription: {
        paddingLeft: 10,
        paddingBottom: 10,
        // height:'100%',
        // justifyContent: "center",
        flex: 1,

    },
    StoreDescriptionText: {
        fontSize: 12.5,
        lineHeight: 20,
        fontFamily: 'Cairo-Medium'
    },
    infoIcons: {
        borderRadius: 50,
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },

    //Categories and products
    FlatListCategory:{
        width:'100%',

    },
    CategoryDetails:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
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
    },
    FlatListProudct:{
        marginRight:10,

        borderRadius:8,
    },
    proudctName:{
        fontSize:20,
        fontFamily: 'Cairo-Light',
    },
    productImg:{
        width:windowWidth/2.4,
        height:windowWidth/2.4,
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
    }
})