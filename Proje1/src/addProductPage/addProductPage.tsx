import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import style from './style'
import { CustomInput } from '../components/customInput/customInput'
import { CustomButton } from '../customButton/customButton'
import axios from 'axios'

export const AddProductPage = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(Number)
  const [stock, setStock] = useState("")

  const handleButton = () => {
    var newProducts = {
      productName,
      price,
      stock,
    }

    axios
      .post(
        "https://northwind.vercel.app/api/products",
        newProducts
      )
      .then(() => {
        Alert.alert("Yeni ürün eklendi!");
      })
      .catch(() => {
        Alert.alert("İşlem sırasında bir sorun oluştu.")
      });
  };

  const handleInputChange = (inputText: any) => {
    setProductName(inputText)
  }

  return (
    <View style={style.container}>
      <Text style={style.title}>
        AddProductPage
      </Text>
      <CustomInput
        title='Name'
        onInputChange={handleInputChange}
      />
      <CustomInput
        title='Unit Price'
        onInputChange={setPrice}
      />
      <CustomInput
        title='Units in Stock'
        onInputChange={setStock}
      />
      <CustomButton
        onClick={handleButton}
      />
    </View>
  )
}
