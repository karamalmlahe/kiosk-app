import { StyleSheet, Platform, StatusBar } from 'react-native';
import Colors from './../../utilis/AppColors'

export default StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
    },
    BackButton: {
        height:'100%',
        paddingHorizontal: 18,
        justifyContent: 'center',
        width: '12%',

    },
    TitleView: {
        width: '85%',
        height: '100%',
        paddingHorizontal: 5,
        justifyContent: 'center',
    },
    TitleText: {
        fontSize: 23,
        fontFamily: 'Cairo-SemiBold',
    }
})