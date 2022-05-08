import { StyleSheet, Platform, StatusBar } from 'react-native';
import Colors from './../../utilis/AppColors'

export default StyleSheet.create({
    Container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    loadingImg:{
        height:180,
        width:220,
    },
    loadingText:{
        fontSize:30,
        fontFamily: 'Cairo-Medium',
        paddingVertical:5
    }
})