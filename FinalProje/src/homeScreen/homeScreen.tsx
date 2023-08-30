import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { CustomHeader, SlaytSlider } from '../components'
import { EventsCard } from '../components/cards'
export const HomeScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <CustomHeader />
            <SlaytSlider />
            <Text style={{ marginHorizontal: 15, fontWeight: "bold", color: "black", fontSize: 28 }}>
                Güncel Etkinlikler
            </Text>
            <EventsCard />
            <EventsCard />
        </View>
    )
}