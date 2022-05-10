import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Styles from './style'
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

export default TopBarBackNav
