import { Text, View, TextInput } from 'react-native'
import React from 'react'

import Styles from './../../utilis/Styles'

const SearchInput = () => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <>
      <View style={Styles.searchInputText}>
        <Text style={{ fontSize: 28, fontFamily: 'Cairo-Regular', lineHeight: 36}}>Let's find your{'\n'}Store</Text>
      </View>
      <View style={Styles.searchInputView}>
      <TextInput
        style={Styles.searchInputComponent}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="default"
      />
      </View>

    </>
  )
}

export default SearchInput
