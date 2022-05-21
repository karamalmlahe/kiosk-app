import { StyleSheet, Text, View, Dimensions,TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
const windowWidth = Dimensions.get('window').width;

const buttonShowAllProduct = ({ backgroundColor2, fontColor,navigation }) => {
    return (
        <View
        style={[styles.Container, { backgroundColor: backgroundColor2 }]}>
            <View style={[styles.IconView,{backgroundColor: fontColor}]}>
                <MaterialCommunityIcons name="arrow-right" size={28} color={backgroundColor2} />
            </View>
            <Text style={[styles.TextInfo,{color:fontColor }]}>Show all products</Text>
        </View>
    )
}

export default buttonShowAllProduct

const styles = StyleSheet.create({

    Container: {
        flex: 1,
        marginHorizontal: 5,
        width: windowWidth / 2.1,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    IconView:{
        borderRadius:50,
        height:40,
        width:40,
        justifyContent:'center',
        alignItems: 'center',
        marginBottom:10,
        
    },
    TextInfo:{
        fontSize:18,
        fontFamily: 'Cairo-Medium'
    }
})