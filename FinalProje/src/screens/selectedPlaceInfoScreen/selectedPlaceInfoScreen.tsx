import { View, Text } from 'react-native'
import React from 'react'
import style from './style'
import { useSelector } from 'react-redux'
import { RootState } from '../../features/store'

export const SelectedPlaceInfoScreen = () => {
    const eventInfoAll = useSelector((state: RootState) => state.users.EventInfo);
    const { title, adress, place, price, eventStart, eventEnd, eventInfo } = eventInfoAll;

    return (
        <View style={style.container}>
            <Text style={style.title}>{place}</Text>
        </View>
    )
}