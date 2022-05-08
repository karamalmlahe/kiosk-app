import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react';
import Colors from './../../utilis/AppColors'
import { useSelector } from 'react-redux'

//icons
import Feather from "react-native-vector-icons/Feather"
import Ionicons from "react-native-vector-icons/Ionicons"

const DarkMode = (props) => {   
    const isDarkMode = props?.isDarkMode;
    return (
        <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            {
                isDarkMode ? (
                    <Feather name="sun" size={35} color={Colors.gray_2} />
                ) : (
                    <Ionicons name="moon-outline" size={35} color={Colors.white} />
                )
            }
        </View>
    )
}

export default DarkMode