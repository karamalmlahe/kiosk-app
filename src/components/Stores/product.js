import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'

import { reduceTextSize, formatter } from './../../publicFuncs'

//icons
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import FontAwesome from "react-native-vector-icons/FontAwesome"

import Colors from './../../utilis/AppColors'
import ImageComponent from './../image'

const windowWidth = Dimensions.get('window').width;

const Product = ({ fontColor, productImage, productName, productPrice }) => {
    const [isSaved, setIsSaved] = useState(false);
    const [isImageLoading, setIsImageLoading] = useState(true);
    return (
        <View >
            <View style={{justifyContent: 'center',alignItems: 'center'}}>
                <ImageComponent
                    style={styles.productImg}
                    resizeMode={'cover'}
                    source={{ uri: productImage }}
                    fontColor={fontColor} />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <View style={[styles.productInfoNamePrice]}>
                    <Text style={[styles.proudctName, { color: fontColor }]}>{reduceTextSize(productName, 12)}</Text>
                    <Text style={[styles.proudctPrice]}>{formatter.format(productPrice)}</Text>
                </View>
                <View style={[styles.productInfoAddToCart]}>
                    <TouchableOpacity style={[styles.AddToCart]}>
                        <FontAwesome5 name="cart-plus" size={15} color={fontColor} />
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity style={[styles.saveIcon]} onPress={() => setIsSaved(val => !val)}>
                <FontAwesome name={isSaved ? "bookmark" : "bookmark-o"} size={25} color={fontColor} />
            </TouchableOpacity>
        </View>
    )
}

export default Product

const styles = StyleSheet.create({
    productImg: {
        width: windowWidth / 2.12,
        height: windowWidth / 2.15,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    productInfoNamePrice: {
        width: '70%',
        height: 60,
        paddingHorizontal: 5,

    },
    productInfoAddToCart: {
        height: 60,
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    AddToCart: {
        height: 35,
        width: 35,
        backgroundColor: "#5dc076",
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    proudctPrice: {
        color: "#5dc076",
        paddingTop: 5,
        lineHeight: 24,
        fontSize: 20,
        fontFamily: 'Cairo-Medium',
    },
    proudctName: {
        fontSize: 17,
        fontFamily: 'Cairo-Light',
    },
    saveIcon: {
        position: 'absolute',
        width: '100%',
        alignItems: 'flex-end',
        paddingTop: 10,
        paddingRight: 15,
    }
})