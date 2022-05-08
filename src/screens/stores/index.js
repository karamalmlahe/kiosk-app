import { Text, View, SafeAreaView, RefreshControl, FlatList } from 'react-native'
// import { FlatList,ScrollView  } from 'react-native-gesture-handler';
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
  // const [allStores, setAllStores] = useState([]);

  //redux

  const getIsDarkMode = useSelector((state) => state.userData.isDarkMode);
  const allStores = useSelector((state) => state.allStores?.allStores);

  //darkMode
  const backgroundColor = getIsDarkMode ? Colors.gray_2 : Colors.white;
  const fontColor = getIsDarkMode ? Colors.white : Colors.gray_2;


  const filteredData = allStores.stores?.filter((item) => {
    return Object.values(item.storeName).join('').toLowerCase().includes(searchText.toLowerCase())
  })


//for refresh page and get a new data 
  const dispatch = useDispatch();
  
  const getAllStores = useCallback(async () => {
    let stores = storeActions.get_stores_action();
    setRefreshing(true);
    try {
      await dispatch(stores);
      setRefreshing(false);
    } catch (error) {
      setRefreshing(false);
    }
  }, [setRefreshing, dispatch, storeActions.get_stores_action])

  const onRefresh = async () => {
    await getAllStores();
  }

  useEffect(() => {
    getAllStores();
  }, [getAllStores])


  // const [pV, setpV] = useState(35);
  // const [H, setH] = useState(10);
  // const doSomething = (position) => {
  //   LayoutAnimation.spring();
  //   if (position > 105 && pV > 0) {
  //     setpV(v => v - 1);
  //     // setH(v => v + 10)
  //   }
  //   else if (position > 0 && position < 105 && pV < 35) {
  //     setpV(v => v + 1);
  //     // setH(v => v + 10)
  //   }

  // }

  return (
    <SafeAreaView style={[Styles.SafeAreaView, { backgroundColor: backgroundColor }]}>
      <View style={{ height: '100%', backgroundColor: backgroundColor }} >
        <View style={{ paddingLeft: 12 }}>
          <TopBar />
        </View>
        {/* <ScrollView contentContainerStyle={{ paddingVertical: 20 }} stickyHeaderIndices={[0]} refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />}
        // onScroll={(event) => {
        //   setPos(event.nativeEvent.contentOffset.y)
        // }}
        // onScroll will be fired every 16ms
        // scrollEventThrottle={16}
        > */}



        <View style={{}}>
          {

            allStores.stores?.length > 0 ?
              <FlatList
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    tintColor={fontColor}
                  />
                }
                data={filteredData}
                numColumns={2}
                keyExtractor={item => item._id}
                nestedScrollEnabled={false}
                renderItem={store => (<Stores store={store.item} navigation={props.navigation} />)}
                stickyHeaderIndices={[0]}
                // onScroll={(event) => setPos(event.nativeEvent.contentOffset.y)}
                // onScroll={(event) => doSomething(event.nativeEvent.contentOffset.y)}
                ListHeaderComponent={
                  <View style={{ flex: 1, backgroundColor: backgroundColor }}>
                    <View style={{ paddingLeft: 12, paddingVertical: 35, }}>
                      <Text style={{ fontSize: 28, fontFamily: 'Cairo-Regular', lineHeight: 36, color: fontColor }}>Let's find your{'\n'}Store</Text>
                    </View>
                    <View style={{ paddingLeft: 12, backgroundColor: 'white', flex: 1, borderRadius: 12, justifyContent: 'center', backgroundColor: backgroundColor, marginBottom: 10, paddingBottom: 5 }} >
                      <SearchInput setSearch={setSearchText} searchText={searchText}/>
                    </View>
                  </View>
                }
                ListFooterComponent={<View />}
                ListFooterComponentStyle={{ height: 90 }}
              />
              :
              (
                <Text>No Stores</Text>
              )
          }
        </View>
        {/* </ScrollView> */}
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