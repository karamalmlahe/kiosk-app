import { Text, SafeAreaView,View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export const DashboardScreen = (props) => {
  const getIsDarkMode = useSelector((state) => state.userData.isDarkMode);
  return (
    <SafeAreaView>
      <View style={{ height: '100%',backgroundColor: getIsDarkMode?'#121212':'white' }}>
        <Text>Dashboard</Text>
      </View>

    </SafeAreaView>
  )
}
export const screenOptions = navData => {
  return {
    headerTitle: 'Dashboard',
    headerShown: false
  }
}
