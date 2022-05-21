import { Text, View, SafeAreaView, RefreshControl, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import * as storeActions from './../../../store/actions'

import Stores from './../../components/Stores'
import TopBar from './../../components/TopBarUserInfo'
import SearchInput from './../../components/Stores/searchInput';

import Styles from './../../utilis/Styles';
import Colors from './../../utilis/AppColors'

export const StoresScreen = (props) => {

  //useState
  const [searchText, setSearchText] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  //redux

  const getIsDarkMode = useSelector((state) => state.userData.isDarkMode);
  const allStores = useSelector((state) => state.storesData?.allStores);

  //darkMode
  const backgroundColor = getIsDarkMode ? Colors.gray_2 : Colors.white;
  const fontColor = getIsDarkMode ? Colors.white : Colors.gray_2;


  const filteredData =
    allStores.stores?.filter((item) => {
      return Object.values(item.storeName).join('').toLowerCase().includes(searchText.toLowerCase())
    })


  //for refresh page and get a new data 
  const dispatch = useDispatch();

  const getAllStores = useCallback(async () => {
    let stores = storeActions.get_stores_action();

    try {
      await dispatch(stores);

    } catch (error) {
      console.log('====================================');
      console.log(error);
      console.log('====================================');
    }
  }, [setRefreshing, dispatch, storeActions.get_stores_action])

  const onRefresh = async () => {
    setRefreshing(true);
    await getAllStores();
    setRefreshing(false);
  }

  useEffect(() => {
    getAllStores();
  }, [getAllStores])


  return (
    <SafeAreaView style={[Styles.SafeAreaView, { backgroundColor: backgroundColor, flex: 1 }]}>
      <View style={{ height: '100%', backgroundColor: backgroundColor, }} >
        <View style={{ paddingLeft: 12 }}>
          <TopBar />
        </View>
        <ScrollView
          // decelerationRate={"fast"}
          contentContainerStyle={{ paddingVertical: 20 }}
          stickyHeaderIndices={[1]}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintColor={fontColor}
            />}
        >
          <View style={{ paddingLeft: 12, paddingVertical: 30, }}>
            <Text style={{ fontSize: 28, fontFamily: 'Cairo-Regular', lineHeight: 36, color: fontColor }}>Let's find your{'\n'}Store</Text>
          </View>
          <View style={{ paddingLeft: 12, backgroundColor: 'white', height: 67, borderRadius: 12, justifyContent: 'center', backgroundColor: backgroundColor, paddingVertical: 5 }} >
            <SearchInput setSearch={setSearchText} searchText={searchText} placeholder={"Enter store name"} />
          </View>
          <View style={{}}>

            {

              allStores.stores?.length > 0 ?
                <ScrollView
                  contentContainerStyle={{ flexGrow: 1 }}
                  horizontal
                  scrollEnabled={false}>
                  <FlatList
                    scrollEnabled={false}
                    data={filteredData}
                    numColumns={2}
                    keyExtractor={item => item._id}
                    renderItem={store => (<Stores store={store.item} navigation={props.navigation} />)}
                  />
                </ScrollView>
                :
                (
                  <Text>No Stores</Text>
                )
            }

          </View>
        </ScrollView>

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