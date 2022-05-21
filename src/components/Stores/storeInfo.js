import { StyleSheet, Text, View, Image, TouchableOpacity, Linking, Dimensions, Animated ,Alert} from 'react-native'
import React from 'react';
import WorkingHours from './workingHours'
import Colors from './../../utilis/AppColors'
import ImageComponent from './../image'

import { showLocation } from 'react-native-map-link'

//icons
import Ionicons from "react-native-vector-icons/Ionicons"
import Entypo from "react-native-vector-icons/Entypo"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const windowWidth = Dimensions.get('window').width;

const storeInfo = ({ fontColor, backgroundColor2, backgroundColor3, storeLogo, storeDescription, contactInfo, workingHours, setStoreOpen }) => {

    const Linked = () => {
        Linking.canOpenURL(`mailto:${contactInfo.email}`)
            .then(supported => {
                if (!supported) {
                    return Alert.alert(
                        "Kiosk App",
                        "Your device does not support",
                    );
                } else {
                    return Linking.openURL(`mailto:${contactInfo.email}`)
                }
            })
            .catch(err => {
                console.error('An error occurred', err)
            })
    }
    return (
        <View >
            <View style={[styles.StoreInfo, { backgroundColor: backgroundColor2 }]}>
                <View style={{ height: 'auto', flexDirection: 'row' }}>
                    <View style={[styles.StoreImgView, { backgroundColor: backgroundColor3 }]}>
                        {/* <Image
                            style={styles.StoreImg}
                            resizeMode={'cover'}
                            source={{ uri: storeLogo }}
                        /> */}
                        <ImageComponent
                            style={styles.StoreImg}
                            resizeMode={'cover'}
                            source={{ uri: storeLogo }}
                            fontColor={fontColor} />
                    </View>
                    <View style={styles.StoreDescription}>
                        <Text style={[styles.StoreDescriptionText, { color: fontColor }]}>Description : {"\n"}<Text style={{ fontFamily: 'Cairo-Light' }}>{storeDescription}</Text></Text>
                        <Text style={[styles.StoreDescriptionText, { color: fontColor }]}>Address : {"\n"}<Text style={{ fontFamily: 'Cairo-Light' }}>{contactInfo.address} | {contactInfo.city}</Text></Text>
                        {
                            workingHours?.length > 0 ? (<WorkingHours workingHours={workingHours} fontColor={fontColor} setStoreOpen={setStoreOpen} />) : (<></>)
                        }

                    </View>
                </View>
                <View style={{ flexDirection: 'row', width: '100%', paddingTop: 10, justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={() => Linking.openURL(`tel:${contactInfo.mobile}`)}>
                        <View style={[styles.infoIcons, { backgroundColor: Colors.light_green }]}>
                            <Ionicons name="call" size={28} color={fontColor} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={Linked}>
                        <View style={[styles.infoIcons, { backgroundColor: Colors.light_blue }]}>
                            <Entypo name="mail" size={28} color={fontColor} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => showLocation({
                        latitude: contactInfo.latitude,
                        longitude: contactInfo.longtitude,
                    })
                    } >
                        <View style={[styles.infoIcons, { backgroundColor: Colors.wazeBack }]}>
                            <MaterialCommunityIcons name="waze" size={28} color={fontColor} />
                        </View>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

export default storeInfo

const styles = StyleSheet.create({
    StoreInfo: {
        alignItems: 'center',
        paddingHorizontal: 10,
        justifyContent: 'center',
        paddingBottom: 10,
    },
    StoreImgView: {
        height: windowWidth / 2.5,
        justifyContent: 'center',
        width: windowWidth / 2.5,
        alignItems: 'center',
        borderRadius: 20
    },
    StoreImg: {
        height: '80%',
        width: '80%',
        borderRadius: 20,
    },
    StoreDescription: {
        paddingLeft: 10,
        paddingBottom: 10,
        flex: 1,

    },
    StoreDescriptionText: {
        fontSize: 12.5,
        lineHeight: 20,
        fontFamily: 'Cairo-Medium'
    },
    infoIcons: {
        borderRadius: 50,
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
})