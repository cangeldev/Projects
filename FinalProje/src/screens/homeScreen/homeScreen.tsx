import { View, Text } from 'react-native'
import React from 'react'
import { CustomHeader, SlaytSlider } from '../../components'
import { EventsCard } from '../../components/cards'
import style from './style'

export const HomeScreen = () => {
    return (
        <View style={style.container}>
            <CustomHeader />
            <SlaytSlider />
            <Text style={style.title}>
                Güncel Etkinlikler
            </Text>
            <EventsCard />
            <EventsCard />
        </View>
    )
}