import {Text, View,ActivityIndicator } from 'react-native'
import React from 'react'

export const StoresScreen = (props) => {
  return (
    <View>
      <Text>Stores</Text>
    </View>
  )
}
export const screenOptions = navData=>{
  return {
      headerTitle: 'Stores',
      headerShown: false
  }
}