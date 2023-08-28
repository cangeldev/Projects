import { View, Text } from 'react-native'
import React from 'react'
import { CustomHeader, SlaytSlider } from './src/components'
import { EventsCard } from './src/components/cards'

const App = () => {
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

export default App