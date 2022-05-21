import { Text, View, TextInput, TouchableOpacity, onLayout, Animated } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

//icons
import AntDesign from "react-native-vector-icons/AntDesign"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

import Styles from './../../utilis/Styles'
import Colors from './../../utilis/AppColors'
const SearchInput = (props) => {
  const getIsDarkMode = useSelector((state) => state.userData.isDarkMode);
  const backgroundColor =getIsDarkMode? Colors.gray_2 : Colors.white ;
  const fontColor = getIsDarkMode? Colors.white : Colors.gray_2;
    return (
      <>
        <View style={[Styles.searchInputView,{backgroundColor:backgroundColor}]}>
          <View style={Styles.searchInputIcon} >
            <AntDesign name='search1' size={28} color={fontColor} />
          </View>
          <TextInput
            style={[Styles.searchInputComponent,{color : fontColor}]}
            placeholderTextColor={fontColor}
            onChangeText={val => props.setSearch(val)}
            value={props.searchText}
            placeholder={props.placeholder}
            keyboardType="default"
          />
          <View style={Styles.searchInputClearIcon}>
            {
              props.searchText ?
                (
                  <TouchableOpacity onPress={() => props.setSearch('')}>
                    <MaterialCommunityIcons name='close-circle' size={20} color={fontColor} />
                  </TouchableOpacity>

                )
                :
                (<></>)
            }

          </View>
        </View>


      </>
    )
  }

  export default SearchInput
