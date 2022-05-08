import { Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Styles from './style'

const TopBarBackNav = (props) => {
    const fontColor = props.fontColor;
    return (
        <View style={Styles.Container}>
            <TouchableOpacity style={Styles.BackButton} onPress={() => props.navigation.goBack()}>
                    <MaterialIcons name="arrow-back-ios" size={28} color={fontColor} />
            </TouchableOpacity>
            <View style={Styles.TitleView}>
                <Text style={[Styles.TitleText,{color:fontColor}]}>{props.storeName?.toUpperCase()}</Text>
            </View>
        </View>
    )
}

export default TopBarBackNav
