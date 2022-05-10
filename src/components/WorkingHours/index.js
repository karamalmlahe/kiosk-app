import { Text, View, TouchableOpacity, FlatList, Animated, Easing } from 'react-native'
import React, { useState, useEffect } from 'react'
import AntDesign from "react-native-vector-icons/AntDesign"
import Styles from './style'

const WorkingHours = (props) => {
    const [isopened, setIsopened] = useState(false)//if the drop down view of working hours is opened
    
    const [isStoreOpenText, setStoreOpenText] = useState('');
    const fontColor = props.fontColor;
    const formatWorkingHours = () => {
        const workingHours = props.workingHours.sort((a, b) => {
            return a.day - b.day;
        });
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        workingHours.map((day, i) => {
            day.dayString = days[i];
        })
        return workingHours
    }
    const [animation, setAnimation] = useState(new Animated.Value(0))
    const boxStyle = {
        height: animation
    };
    useEffect(async () => {
        if (isopened) {
            Animated.timing(animation, {
                toValue: 125,
                duration: 500,
                useNativeDriver: false,
            }).start(async ({ finished }) => {
                await setAnimation(new Animated.Value(125))

            });
        }
        else if (!isopened) {
            Animated.timing(animation, {
                toValue: 0,
                duration: 500,
                useNativeDriver: false
            }).start(async ({ finished }) => {
                await setAnimation(new Animated.Value(0))

            });
        }

    }, [isopened])

    useEffect(() => {
        const date = new Date();
        const utcTime = date.getTime() + (date.getTimezoneOffset() * 60000);
        const timeOffset = 3;
        const israelTime = new Date(utcTime + (3600000 * timeOffset));
        // console.log(israelTime.getHours() + ":" + israelTime.getMinutes());
        // console.log(israelTime.getDay() + 1);
        const day = props.workingHours.find(day => day.day == israelTime.getDay() + 1);
        if (day.isOpen == true) {
            const fromHourH = parseInt(day.fromHour.toString().substring(0, (day.fromHour.toString().length / 2)));
            const fromHourM = parseInt(day.fromHour.toString().substring((day.fromHour.toString().length / 2)));
            const toHourH = parseInt(day.toHour.toString().substring(0, (day.toHour.toString().length / 2)));
            const toHourM = parseInt(day.toHour.toString().substring((day.toHour.toString().length / 2)));
            const fromHourDay = new Date(israelTime);
            const toHouDay =  new Date(israelTime);

            fromHourDay.setHours(fromHourH);
            fromHourDay.setMinutes(fromHourM);

            toHouDay.setHours(toHourH);
            toHouDay.setMinutes(toHourM);

            if(fromHourDay.getTime()<israelTime.getTime() &&toHouDay.getTime()> israelTime.getTime()){
                props.setStoreOpen(true);
                setStoreOpenText(`Open - will close at ${("0"+toHourH).slice(-2)}:${("0"+toHourM).slice(-2)}`)
            }
            else{
                props.setStoreOpen(false);
                setStoreOpenText(`Closed`)
            }
        }
        else {
            setStoreOpen(false);
            console.log('closed')
        }


    }, [])


    // const animatedValue = new Animated.Value(0);
    // const buttonScale = animatedValue.interpolate({
    //     inputRange: [0, 0.5, 1],
    //     outputRange: [1, 1.25, 1.5]
    // });
    // const onPressIn = () => {
    //     Animated.timing(animatedValue, {
    //       toValue: 1,
    //       duration: 2500,
    //       easing: Easing.linear,
    //       useNativeDriver: true
    //     }).start();
    // }

    // const onPressOut = () => {
    //     Animated.timing(animatedValue, {
    //         toValue: 0,
    //         duration: 2500,
    //         easing: Easing.linear,
    //         useNativeDriver: true,
    //         easing: Easing.linear,
    //       }).start();
    // };
    // const animatedScaleStyle = {
    //     transform: [{scale: buttonScale}]
    // };

    return (
        <View style={Styles.Container}>
            <View style={Styles.Title}>
                <Text style={[Styles.ContainerText, { color: fontColor }]}>Working Hours : <Text style={{fontSize:8,}}>{"("+isStoreOpenText+")"}</Text></Text>
                <TouchableOpacity style={Styles.btnDropDown} onPress={() => setIsopened(v => !v)}><AntDesign name={isopened ? "caretup" : "caretdown"} color={fontColor} size={10} /></TouchableOpacity>
            </View>
            <Animated.View style={boxStyle}>
                <FlatList
                    data={formatWorkingHours()}
                    keyExtractor={item => item._id}
                    renderItem={day => (
                        <View style={[Styles.FlatListContainer]}
                        >
                            <Text style={[Styles.WorkingHoursText, { color: fontColor }]}> {day.item.dayString}{" "}
                                {

                                    day.item.isOpen ? (<Text style={{ color: 'green' }}>{('0'+day.item.fromHour.toString().substring(0, (day.item.fromHour.toString().length / 2))).slice(-2) + ":" + day.item.fromHour.toString().substring((day.item.fromHour.toString().length / 2))
                                        + " - " + ('0'+day.item.toHour.toString().substring(0, (day.item.toHour.toString().length / 2))).slice(-2) + ":" + day.item.toHour.toString().substring((day.item.toHour.toString().length / 2))}</Text>) : (<Text style={{ color: 'red' }}>Closed</Text>)

                                }
                            </Text>
                        </View>
                    )}

                />
            </Animated.View>

        </View >
    )
}

export default WorkingHours