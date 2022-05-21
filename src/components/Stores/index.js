import { Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import Styles from './../../utilis/Styles'
import Colors from './../../utilis/AppColors'
import ImageComponent from './../image/index'

import { useSelector } from 'react-redux'

//icons
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

const Stores = (props) => {

    const [favorite, setFavorite] = useState(false);//props.store...

    const reduceTextSize = (text, size) => {
        if (text.length > size) {
            return text.substring(0, size) + '...';
        }
        return text;
    }

    const favoriteClicked = () => {
        setFavorite(val => !val);
        //update in database
    }
    const getIsDarkMode = useSelector((state) => state.userData.isDarkMode);
    const backgroundColor = getIsDarkMode ? Colors.gray_3 : Colors.gray_10;
    const fontColor = getIsDarkMode ? Colors.white : Colors.black;
    const dataNav = { id: props.store._id, storeName: props.store.storeName, storeLogo: props.store.logo, storeDescription: props.store.storeDescription, workingHours: props.store.workingHours, contactInfo: props.store.contactInfo }
    return (
        <>
            {
                !props.store.isLocked ? (<TouchableOpacity style={[Styles.StoreView, { backgroundColor: backgroundColor }]} onPress={() => props.navigation.navigate('Categories', dataNav)}>

                    <View style={Styles.StoreImgView}>
                        <ImageComponent
                            style={Styles.StoreImg}
                            resizeMode={'cover'}
                            source={{ uri: dataNav.storeLogo }}
                            fontColor={fontColor} />
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={Styles.StoreInfo}>
                            <Text style={[Styles.StoreName, { color: fontColor }]}>{reduceTextSize(props.store.storeName?.toUpperCase(), 10)}</Text>
                            <Text style={[Styles.StoreAddress, { color: fontColor }]}>{reduceTextSize(props.store.contactInfo.address + ' | ' + props.store.contactInfo.city, 20)}</Text>
                        </View>
                        <View style={Styles.AddToFavouritesIcon}>
                            <TouchableOpacity onPress={favoriteClicked}>
                                {
                                    favorite ? (<MaterialIcons name='favorite' size={25} color={Colors.red} />)
                                        :
                                        (<MaterialIcons name='favorite-border' size={25} color={Colors.gray} />)
                                }

                            </TouchableOpacity>

                        </View>
                    </View>

                </TouchableOpacity>) : (<></>)
            }

        </>
    )
}

export default Stores