import { StyleSheet, Dimensions,Platform } from 'react-native'
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({

    caroselImage: {
        height: windowHeight / 1.8,
    },
    productInfo: {
        minHeight: windowHeight - windowHeight / 1.8 - 10,
        flex: 1,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        marginTop: 15,
    },
    ButtonUp:{
        height:45,
        borderRadius:15,
        width:45,
        justifyContent: 'center',
        alignItems: 'center',
        position:'absolute',
        top:Platform.OS=='ios'?(40):(0),
    }

})