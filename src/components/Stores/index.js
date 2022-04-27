import { Text, View, Image } from 'react-native'
import React from 'react';
import Styles from './../../utilis/Styles'

const Stores = (props) => {
    return (
        <>
            <View style={Styles.StoreView}>
                <Image
                    style={Styles.StoreImg}
                    resizeMode={'cover'}
                    source={{ uri: props.store.logo }}
                />
                <View style={Styles.StoreInfo}>
                    <Text>{props.store.storeName}</Text>
                </View>
            </View>
        </>



    )
}

export default Stores
