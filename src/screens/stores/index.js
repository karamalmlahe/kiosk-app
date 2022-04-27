import { Text, View, ActivityIndicator, FlatList, SafeAreaView, Platform, StatusBar } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';

import Stores from './../../components/Stores'
import TopBar from './../../components/TopBar'
import SearchInput from './../../components/Stores/searchInput';

import Styles from './../../utilis/Styles'

export const StoresScreen = (props) => {

  const allStores = useSelector((state) => state.allStores)
  return (
    <SafeAreaView style={Styles.SafeAreaView}>
      <View style={{paddingLeft:10}}>
        <TopBar />
        <SearchInput />
        {
          allStores.allStores.stores?.length > 0 ? (
            <FlatList
              data={allStores.allStores.stores}
              numColumns={2}
              keyExtractor={item => item._id}
              renderItem={store => (<Stores store={store.item} />)}
            />
          ) :
            (
              <Text>No Stores</Text>
            )
        }
      </View>

    </SafeAreaView>
  )
}
export const screenOptions = navData => {
  return {
    headerTitle: 'Stores',
    headerShown: false
  }
}