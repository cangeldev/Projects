import { View } from 'react-native'
import React from 'react'
import { Container } from './src/container/container'
import { LogBox } from 'react-native'
import { Provider } from "react-redux"
import { store } from './src/features/store'

LogBox.ignoreLogs(['Warning: ...']) // Ignore log notification by message
LogBox.ignoreAllLogs()//Ignore all log notifications

const App = () => {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <Container />
      </View>
    </Provider>
  )
}
export default App