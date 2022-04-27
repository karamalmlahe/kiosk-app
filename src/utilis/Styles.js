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
    searchInputText: {
        paddingVertical: 35,
    },
    searchInputView: {
        paddingRight: 10,
        paddingBottom: 20,
    },
    searchInputComponent: {
        fontSize: 25,
        paddingLeft: 5,
        borderRadius: 12,
        borderColor:Colors.gray_text,
        borderWidth:0.5,

    },




    StoreView: {
        flex: 1,
        marginTop: 10,
        marginRight: 10,
        height: 200,
        width: '100%'

    },
    StoreImg: {
        flex: 1,
        borderRadius: 2,
    },
    StoreInfo: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.50)',
        borderRadius: 20,
        shadowColor: '#000000',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    }
})