import { View } from 'react-native'
import React from 'react'
import { Container } from './src/container/container'
import { LogBox } from 'react-native'

LogBox.ignoreLogs(['Warning: ...']) // Ignore log notification by message
LogBox.ignoreAllLogs()//Ignore all log notifications

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Container />
    </View>
  )
}
export default App