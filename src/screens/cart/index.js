import {Text, View,ActivityIndicator } from 'react-native'
import React from 'react'

export const CartScreen = (props) => {
  return (
    <View>
      <Text>Cart</Text>
    </View>
  )
}
export const screenOptions = navData=>{
  return {
      headerTitle: 'Cart',
      headerShown: false
  }
}