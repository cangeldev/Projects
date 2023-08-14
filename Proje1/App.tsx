import { View, StyleSheet } from 'react-native'
import React from 'react'
import { AddProductPage } from './src/addProductPage/addProductPage'
import { ProductListPage } from './src/ProductListPage/ProductListPage'

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <AddProductPage />
      <View style={styles.container}>
        <View style={styles.line} />
      </View>
      <ProductListPage />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    justifyContent: 'center',
    alignItems: 'center'
  },
  line: {
    width: 320,
    height: 1,
    backgroundColor: 'grey',
    marginBottom: 20
  }
})

export default App