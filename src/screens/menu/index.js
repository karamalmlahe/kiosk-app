import {Text, View,ActivityIndicator } from 'react-native'
import React from 'react'

export const MenuScreen = (props) => {
  return (
    <View>
      <Text>Menu</Text>
    </View>
  )
}
export const screenOptions = navData=>{
  return {
      headerTitle: 'Menu',
      headerShown: false
  }
}