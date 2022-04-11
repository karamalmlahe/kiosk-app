import {Text, View,ActivityIndicator } from 'react-native'
import React from 'react'

export const DashboardScreen = (props) => {
  return (
    <View>
      <Text>Dashboard</Text>
    </View>
  )
}
export const screenOptions = navData=>{
  return {
      headerTitle: 'Dashboard',
      headerShown: false
  }
}
