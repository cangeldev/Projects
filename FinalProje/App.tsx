import { View, Text } from 'react-native'
import React from 'react'
import { CustomHeader } from './src/components/customHeader/customHeader'

const App = () => {
  return (
    <View style={{ flex: 1 ,backgroundColor:"white"}}>
      <CustomHeader />
    </View>
  )
}

export default App