import {StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Colors from './../../utilis/AppColors'

const TopBarBackNav = (props) => {
    const fontColor = props.fontColor;
    return (
        <View style={Styles.Container}>
            <TouchableOpacity style={Styles.BackButton} onPress={() => props.navigation.goBack()}>
                <MaterialIcons name="arrow-back-ios" size={28} color={fontColor} />
            </TouchableOpacity>
            <View style={Styles.TitleView}>
                <Text style={[Styles.TitleText, { color: fontColor }]}>{props.storeName?.toUpperCase()}</Text>
            </View>
            <View style={Styles.StoreStatus}>
                {
                    props.isStoreOpen != undefined ? (<View style={[Styles.Circle, { backgroundColor: props.isStoreOpen ? (Colors.green) : (Colors.red) }]}></View>) : (<></>)
                }

            </View>
        </View>
    )
}
const Styles = StyleSheet.create({
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
        width: '80%',
        height: '100%',
        paddingHorizontal: 5,
        justifyContent: 'center',
    },
    TitleText: {
        fontSize: 23,
        fontFamily: 'Cairo-SemiBold',
    },
    StoreStatus:{
        width: '5%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    Circle:{
        borderRadius:50,
        height: 15,
        width: 15,
    }
})
export default TopBarBackNav
