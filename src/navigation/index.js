import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { View } from 'react-native'

//icons
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

//redux
import { useSelector } from 'react-redux'

import Colors from './../utilis/AppColors'

//Screens
//****************************************************************
//Dashboard
import { DashboardScreen, screenOptions as DashboardScreenOptions } from "./../screens/dashboard";

//Stores
import { StoresScreen, screenOptions as StoresScreenOptions } from "./../screens/stores";
import { CategoriesScreen, screenOptions as CategoriesScreenOptions } from "../screens/Categories";
import { ProductsScreen, screenOptions as ProductsScreenOptions } from "../screens/Products";
import { ProductScreen, screenOptions as ProductScreenOptions } from "./../screens/Product";


//Cart
import { CartScreen, screenOptions as CartScreenOptions } from "./../screens/cart";

//Menu
import { MenuScreen, screenOptions as MenuScreenOptions } from "./../screens/menu";

// ***************************************************************




//Stacks
const DashboardStackNavigation = createStackNavigator();
const CardStackNavigation = createStackNavigator();
const StoreStackNavigation = createStackNavigator();
const MenuStackNavigation = createStackNavigator();

//BottomTab
const TabsBottomNavigation = createMaterialBottomTabNavigator();

//Dashboard Stack
export const DashboardStack = () => {
    return (
        <DashboardStackNavigation.Navigator>
            <DashboardStackNavigation.Screen name="Dashboard" component={DashboardScreen} options={DashboardScreenOptions} />
        </DashboardStackNavigation.Navigator>
    )
}


//Card Stack
export const CardStack = () => {
    return (
        <CardStackNavigation.Navigator>
            <CardStackNavigation.Screen name="Cart" component={CartScreen} options={CartScreenOptions} />
        </CardStackNavigation.Navigator>
    )
}


//Stores Stack
export const StoresStack = () => {
    return (
        <StoreStackNavigation.Navigator>
            <StoreStackNavigation.Screen name="Stores" component={StoresScreen} options={StoresScreenOptions} />
            <StoreStackNavigation.Screen name="Categories" component={CategoriesScreen} options={CategoriesScreenOptions} />
            <StoreStackNavigation.Screen name="Products" component={ProductsScreen} options={ProductsScreenOptions} />
            <StoreStackNavigation.Screen name="Product" component={ProductScreen} options={ProductScreenOptions} />
        </StoreStackNavigation.Navigator>
    )
}


//Menu Stack
export const MenuStack = () => {
    return (
        <MenuStackNavigation.Navigator>
            <MenuStackNavigation.Screen name="Menu" component={MenuScreen} options={MenuScreenOptions} />
        </MenuStackNavigation.Navigator>
    )
}



//Tap Material Bottom
const Tab = createMaterialBottomTabNavigator();

//Tap Material Bottom UI
export const BottomTab = () => {
    const getIsDarkMode = useSelector((state) => state.userData.isDarkMode);
    const backgroundColor =getIsDarkMode? Colors.gray_3 : Colors.white ;
    const iconColorActive = getIsDarkMode? Colors.white : Colors.gray_2;
    const iconColorinActive = getIsDarkMode? Colors.gray_4 : Colors.gray;
    return (

        <Tab.Navigator shifting
            initialRouteName={'DashboardTab'}
            activeColor={iconColorActive}
            inactiveColor={iconColorinActive}
            barStyle={{ backgroundColor: backgroundColor, height: '8.2%'}}>
            <Tab.Screen name="DashboardTab" component={DashboardStack}  options={{labelStyle:{ margin:0, padding:0,color:'red' },iconStyle: { height: 300, width: 300 },
                tabBarLabel: null, tabBarIcon: ({ color }) => (
                    <View style={{height:40,width:40}}><MaterialCommunityIcons name="view-dashboard" size={30} color={color} /></View>
                )
            }} />
            <Tab.Screen name="StoresTab" component={StoresStack} options={{
                tabBarLabel: null, tabBarIcon: ({ color }) => (
                    <View style={{height:40,width:40}}><MaterialCommunityIcons name="storefront" size={30} color={color} /></View>
                )
            }} />
            <Tab.Screen name="CartTab" component={CardStack} options={{
                tabBarLabel: null, tabBarIcon: ({ color }) => (
                    <View style={{height:40,width:40}}><MaterialCommunityIcons name="cart" size={30} color={color} /></View>
                )
            }} />
            <Tab.Screen name="MenuTab" component={MenuStack} options={{
                tabBarLabel: null, tabBarIcon: ({ color }) => (
                    <View style={{height:40,width:40}}><MaterialCommunityIcons name="menu" size={30} color={color} /></View>
                )
            }} />
        </Tab.Navigator>

    )
}