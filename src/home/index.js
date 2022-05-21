import { View, TouchableOpacity, StatusBar } from 'react-native'
import React, { useCallback, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
//redux
import { useDispatch, useSelector } from 'react-redux'
import * as storeActions from '../../store/actions'
//navigation
import { NavigationContainer } from "@react-navigation/native";
import { BottomTab } from "../navigation";
//Style
import Styles from '../utilis/Styles';
import Colors from "./../utilis/AppColors"
//darkMode
import DarkMode from "../components/DarkMode"
//loadingScreen
import LoadingScreen from "../screens/loading"


const BottomTabComponent = (props) => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    // const [isDarkMode, setIsDarkMode] = useState();

    const getAllStoresDispatch = useCallback(async () => {
        let stores = storeActions.get_stores_action();
        setIsLoading(true);
        try {
            await dispatch(stores);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
        }
    }, [setIsLoading, dispatch, storeActions.get_stores_action])

    const getUserDataDispatch = useCallback(async () => {
        let userData = storeActions.get_data_from_asyncStorage_action();
        setIsLoading(true);
        try {
            await dispatch(userData);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
        }
    }, [setIsLoading, dispatch, storeActions.get_data_from_asyncStorage_action])


    const getisDarkModeDispatch = useCallback(async () => {
        let isDarkModeAction = storeActions.get_is_darkMode_action();
        try {
            await dispatch(isDarkModeAction);
        } catch (error) {
            console.log('====================================');
            console.log(error);
            console.log('====================================');
        }
    }, [setIsLoading, dispatch, storeActions.get_is_darkMode_action])






    const isDarkModeSelector = useSelector((state) => state.userData?.isDarkMode);
    const backgroundColor = isDarkModeSelector ? Colors.white : Colors.gray_2;
    useEffect(async () => {
        await getisDarkModeDispatch();
        await getAllStoresDispatch();
        await getUserDataDispatch();
    }, [])


    const changeValueDarkMode = async (value) => {
        try {
            await AsyncStorage.setItem('isDarkMode', JSON.stringify(!value))
            await getisDarkModeDispatch();
            // setIsDarkMode(!value)
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <StatusBar
                barStyle={isDarkModeSelector ? 'light-content' : 'dark-content'}
                backgroundColor={isDarkModeSelector ? Colors.gray_2 : Colors.white}

            />
            {
                isLoading ? (<LoadingScreen />) : (<>
                    <NavigationContainer>
                        <BottomTab />
                    </NavigationContainer >
                    <View style={[Styles.DarkModeView, { backgroundColor: backgroundColor }]} >
                        <TouchableOpacity onPress={() => changeValueDarkMode(isDarkModeSelector)}>
                            <DarkMode isDarkMode={isDarkModeSelector} />
                        </TouchableOpacity>
                    </View>
                </>)
            }
        </>



    )
}

export default BottomTabComponent
