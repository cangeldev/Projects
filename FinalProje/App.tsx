import { View, Text } from 'react-native'
import React from 'react'
import { CustomHeader, SlaytSlider } from './src/components'

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <CustomHeader />
      <SlaytSlider />
    </View>
  )
}

export default App