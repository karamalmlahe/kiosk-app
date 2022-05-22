import { StyleSheet, Platform, StatusBar, Dimensions } from 'react-native';
import Colors from '../../utilis/AppColors'
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
        CategoryImg:{
            width:windowWidth,
            height:windowWidth/2.2,
        },
        CategoryImgAndName:{
            width:windowWidth,
            height:windowWidth/2.2,
            justifyContent: 'center',
            alignItems: 'center'
        },
        CategoryViewUp:{
            width:windowWidth,
            height:windowWidth/2.2,
            backgroundColor:'#00000099',
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center'
        },
        CategoryName:{
            fontFamily: 'Cairo-Medium',
            fontSize:30,
            color: "#ffffff",
        },
        FlatListProudct:{
            marginHorizontal:5,
            width:windowWidth/2.12,
            borderRadius:8,
        },
})