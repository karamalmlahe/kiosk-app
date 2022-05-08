import { StyleSheet, Platform, StatusBar } from 'react-native';
import Colors from './AppColors';

export default StyleSheet.create({
    //SafeAreaView for Android
    SafeAreaView: {
        paddingTop: (Platform.OS === "android" ? StatusBar.currentHeight - 10 : 0),
    },

    //TopBar
    TopBarView: {
        paddingRight: 20,
        // paddingLeft:10,
        paddingVertical: 5,
        flexDirection: 'row',
    },
    TopBarHello: {
        fontSize: 25,
        fontFamily: 'Cairo-Medium'

    },
    TopBarProfileAvatar: {
        width: 46,
        height: 46,
        borderRadius: 50,
    },

    //Search Input
    searchInputView: {
        marginRight: 10,
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        borderWidth: 0.8,
        borderColor: Colors.gray,
        paddingVertical: 8,
        borderRadius: 15,
        height: '90%',


    },
    searchInputComponent: {
        fontSize: 18,
        paddingLeft: 5,
        borderRadius: 12,
        width: "76%",
        fontFamily: 'Cairo-Medium',
        paddingRight: 0,
    },
    searchInputIcon: {
        width: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchInputClearIcon: {
        width: '9%',
        alignItems: 'flex-start',
        paddingLeft: 3,
        justifyContent: 'center',
    },



    //Store Components
    StoreView: {
        width: '45%',
        backgroundColor: Colors.gray_10,
        height: 210,

        marginLeft: 10,
        marginRight: 10,
        marginVertical: 12,
        borderRadius: 12,
        paddingHorizontal: 15,
        paddingTop: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 9,
        justifyContent: "center",
    },
    StoreImg: {
        height: 130,
        width: 130,
        borderRadius: 360,
        alignSelf: 'center'
    },
    StoreInfo: {
        width: '82%',
    },
    StoreName: {
        fontFamily: 'Cairo-Regular',
        fontSize: 14,
        lineHeight: 20,
    },
    StoreAddress: {
        fontFamily: 'Cairo-Light',
        fontSize: 12,
        lineHeight: 17,
        color: Colors.gray_text,
    },
    AddToFavouritesIcon: {
        paddingBottom: 10,
        width: '18%',
        alignItems: 'flex-end',
    },



    //dark Mode Component
    DarkModeView: {
        justifyContent: 'center',
        zIndex: 2,
        width: 62,
        height: 62,
        position: 'absolute',
        bottom: '9%',
        right: 10,
        borderRadius:50,
        borderWidth:0.3,
        borderColor:Colors.gray_text,
    }
})