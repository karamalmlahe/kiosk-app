import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import {MaterialCommunityIcons} from "react-native-vector-icons/MaterialCommunityIcons"

//Screens
import DashboardScreen from "./../screens/dashboard";
import CardScreen from "./../screens/card";
import StoresScreen from "./../screens/stores";
import MenuScreen from "./../screens/menu";

//Stacks
const DashboardStackNavigation = createStackNavigator();
const CardStackNavigation = createStackNavigator();
const StoreStackNavigation = createStackNavigator();
const MenuStackNavigation = createStackNavigator();

//BottomTab
const TabsBottomNavigation = createMaterialBottomTabNavigator();

//Dashboard Stack
export const DashboardStack=()=>{
    return(
        <DashboardStackNavigation.Navigator>
            <DashboardStackNavigation.Screen name="Dashboard" component={DashboardScreen}/>
        </DashboardStackNavigation.Navigator>
    )
}


//Card Stack
export const CardStack=()=>{
    return(
        <CardStackNavigation.Navigator>
            <CardStackNavigation.Screen name="Card" component={CardScreen}/>
        </CardStackNavigation.Navigator>
    )
}


//Stores Stack
export const StoresStack=()=>{
    return(
        <StoreStackNavigation.Navigator>
            <StoreStackNavigation.Screen name="Stores" component={StoresScreen}/>
        </StoreStackNavigation.Navigator>
    )
}


//Menu Stack
export const MenuStack=()=>{
    return(
        <MenuStackNavigation.Navigator>
            <MenuStackNavigation.Screen name="Menu" component={MenuScreen}/>
        </MenuStackNavigation.Navigator>
    )
}



//Tap Material Bottom
const Tab = createMaterialBottomTabNavigator();

//Tap Material Bottom UI
export const BottomTab=()=>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="DashboardTab" component={DashboardStack} options={{tabBarLabel:"Dashboard"}}/>
            <Tab.Screen name="CardTab" component={CardStack} options={{tabBarLabel:"Card"}}/>
            <Tab.Screen name="StoresTab" component={StoresStack} options={{tabBarLabel:"Stores"}}/>
            <Tab.Screen name="MenuTab" component={MenuStack} options={{tabBarLabel:"Menu"}}/>
        </Tab.Navigator>
    )
}