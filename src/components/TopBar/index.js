import { Text, View,Image } from 'react-native'
import React from 'react'
import Styles from './../../utilis/Styles'
import Colors from './../../utilis/AppColors'

import { useSelector } from 'react-redux'

const TopBar = (props) => {
    const getHour = (new Date()).getHours();
    const userData = useSelector((state) => state.allStores.UserData)
    return (
        <View style={Styles.TopBarView}>
            <View style={{ width: '90%',justifyContent: 'center'}}>
                <Text style={Styles.TopBarHello}>Good
                    {
                        getHour >= 0 && getHour < 12 ? (
                            ' Morning '
                        ) : (
                            ' Night '
                        )
                    }
                    <Text style={{fontFamily: 'Cairo-SemiBold',color: Colors.orange}}>
                    {
                        
                        userData ? (userData.data?.associateId.firstName) : ('Dear')
                    }
                    {" "}👋</Text>
                </Text>
            </View>
            <View style={{ width: '10%',justifyContent: 'flex-end'}}>
            <Image
                    style={Styles.TopBarProfileAvatar}
                    resizeMode={'cover'}
                    source={{ uri: userData ? (userData.data?.associateId.avatar):('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfwfzTPVw45cJcHNUp3sWUWLOkYAfQlAEBOQ&usqp=CAU') }}
                />
            </View>
        </View>
    )
}

export default TopBar