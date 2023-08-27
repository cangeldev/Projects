import { View, Text } from 'react-native'
import React from 'react'
import { CustomHeader } from './src/components/customHeader/customHeader'

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <CustomHeader />
    </View>
  )
}

export default App