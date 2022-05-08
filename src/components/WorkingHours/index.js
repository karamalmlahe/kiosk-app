import { Text, View, TouchableOpacity, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import AntDesign from "react-native-vector-icons/AntDesign"
import Styles from './style'

const WorkingHours = (props) => {
    const [isopened, setIsopened] = useState()//if the drop down view of working hours is opened
    const fontColor = props.fontColor;
    const formatWorkingHours = () => {
        const workingHours = props.workingHours.sort((a, b) => {
            return a.day - b.day;
        });
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        workingHours.map((day, i) => {
            day.day = days[i];
        })
        return workingHours
    }
    return (
        <View style={Styles.Container}>
            <View style={Styles.Title}>
                <Text style={[Styles.ContainerText, { color: fontColor }]}>Working Hours{"  "}</Text>
                <TouchableOpacity style={Styles.btnDropDown} onPress={() => setIsopened(v => !v)}><AntDesign name={isopened ? "caretup" : "caretdown"} color={fontColor} size={10} /></TouchableOpacity>
            </View>
            {
                isopened ? (<View>
                    <FlatList
                        data={formatWorkingHours()}
                        keyExtractor={item => item._id}
                        renderItem={day => (
                            <View>
                                <Text style={[Styles.WorkingHoursText, { color: fontColor }]}> {day.item.day}{" "}
                                    {

                                        day.item.isOpen ? (<Text style={{ color: 'green' }}>{day.item.fromHour.toString().substring(0, (day.item.fromHour.toString().length / 2)) + ":" + day.item.fromHour.toString().substring((day.item.fromHour.toString().length / 2))
                                            + " - " + day.item.toHour.toString().substring(0, (day.item.toHour.toString().length / 2)) + ":" + day.item.toHour.toString().substring((day.item.toHour.toString().length / 2))}</Text>) : (<Text style={{ color: 'red' }}>Closed</Text>)

                                    }
                                </Text>
                            </View>
                        )}

                    />
                </View>) : (<></>)
            }

        </View>
    )
}

export default WorkingHours