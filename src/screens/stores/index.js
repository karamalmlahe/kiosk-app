import {Text, View,ActivityIndicator,FlatList } from 'react-native'
import React,{useCallback,useState,useEffect} from 'react'
import { useDispatch , useSelector } from 'react-redux'
import * as storeActions from '../../../store/actions'
import Colors from '../../utilis/AppColors'

export const StoresScreen = (props) => {

  const dispatch=useDispatch();
  const[isLoading,setIsLoading]=useState(false);

  const getAllStores=useCallback(async()=>{
    let action=storeActions.get_stores_action()
    setIsLoading(true);
    try {
      await dispatch(action);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false)
    }
  },[setIsLoading,dispatch,storeActions.get_stores_action])

  useEffect(()=>{
    getAllStores();
  },[getAllStores])

  const allStores=useSelector((state)=>state.allStors)

  console.log(JSON.stringify(allStores));
  return (
    <View>
      {
        isLoading?(<ActivityIndicator size='large' color={Colors.happy_green} />):(<Text> Stores</Text>)
      }
    </View>
  )
}
export const screenOptions = navData=>{
  return {
      headerTitle: 'Stores',
      headerShown: false
  }
}