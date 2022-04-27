import { Text, View, ActivityIndicator,SafeAreaView  } from 'react-native'
import React,{useCallback,useState,useEffect} from 'react'
import { useDispatch } from 'react-redux'
import * as storeActions from '../../../store/actions'
import Colors from '../../utilis/AppColors'

export const DashboardScreen = (props) => {

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const getAllStores = useCallback(async () => {
    let action = storeActions.get_stores_action();
    setIsLoading(true);
    try {
      await dispatch(action);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false)
    }
  }, [setIsLoading, dispatch, storeActions.get_stores_action])

  const getUserDate = useCallback(async () => {
    let action = storeActions.get_data_from_asyncStorage_action();
    setIsLoading(true);
    try {
      await dispatch(action);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false)
    }
  }, [setIsLoading, dispatch, storeActions.get_data_from_asyncStorage_action])

  useEffect(() => {
    getAllStores();
    getUserDate();
  }, [getAllStores,getUserDate])
  return (
    <SafeAreaView >
      {
        isLoading ? (<ActivityIndicator size='large' color={Colors.happy_green} />) : (<Text> Stores</Text>)
      }
      <Text>Dashboard</Text>
    </SafeAreaView>
  )
}
export const screenOptions = navData => {
  return {
    headerTitle: 'Dashboard',
    headerShown: false
  }
}
