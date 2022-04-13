import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

//icons
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

//Screens
import {DashboardScreen,screenOptions as DashboardScreenOptions} from "./../screens/dashboard";
import {CartScreen,screenOptions as CartScreenOptions} from "./../screens/cart";
import {StoresScreen,screenOptions as StoresScreenOptions} from "./../screens/stores";
import {MenuScreen,screenOptions as MenuScreenOptions} from "./../screens/menu";

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
            <DashboardStackNavigation.Screen name="Dashboard" component={DashboardScreen} options={DashboardScreenOptions}/>
        </DashboardStackNavigation.Navigator>
    )
}


//Card Stack
export const CardStack=()=>{
    return(
        <CardStackNavigation.Navigator>
            <CardStackNavigation.Screen name="Cart" component={CartScreen} options={CartScreenOptions}/>
        </CardStackNavigation.Navigator>
    )
}


//Stores Stack
export const StoresStack=()=>{
    return(
        <StoreStackNavigation.Navigator>
            <StoreStackNavigation.Screen name="Stores" component={StoresScreen} options={StoresScreenOptions}/>
        </StoreStackNavigation.Navigator>
    )
}


//Menu Stack
export const MenuStack=()=>{
    return(
        <MenuStackNavigation.Navigator>
            <MenuStackNavigation.Screen name="Menu" component={MenuScreen} options={MenuScreenOptions}/>
        </MenuStackNavigation.Navigator>
    )
}



//Tap Material Bottom
const Tab = createMaterialBottomTabNavigator();

//Tap Material Bottom UI
export const BottomTab=()=>{
    return(
        <Tab.Navigator shifting>
            <Tab.Screen name="DashboardTab" component={DashboardStack} options={{tabBarLabel:"Dashboard",tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="view-dashboard" size={26} color={color} />
          )}}  />
            <Tab.Screen name="StoresTab" component={StoresStack} options={{tabBarLabel:"Stores",tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="storefront" size={26} color={color} />
          )}}/>
            <Tab.Screen name="CartTab" component={CardStack} options={{tabBarLabel:"Cart",tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="cart" size={26} color={color} />
          )}}/>
            <Tab.Screen name="MenuTab" component={MenuStack} options={{tabBarLabel:"Menu",tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="menu" size={26} color={color}/>
          )}}/>
        </Tab.Navigator>
    )
}