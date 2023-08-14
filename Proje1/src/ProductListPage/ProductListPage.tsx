import { View, Text, FlatList, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import style from './style'
import axios from 'axios'
import { CustomText } from '../components/customText/customText'

export const ProductListPage = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get("https://northwind.vercel.app/api/products")
            .then((res) => {
                setProducts(res.data);
            })
            .catch(() => {
                Alert.alert("İşlem sırasında bir sorun oluştu.")
            })
    })

    const renderProducts = ({ item }: any) =>
        <View style={style.productsListView}>
            <CustomText
                price={item.price}
                text={item.productName}
            />
            <CustomText
                price={item.price}
                text={item.price}
            />
            <CustomText
                price={item.price}
                text={item.stock}
            />
        </View>

    return (
        <View style={style.container}>
            <Text style={style.title}>
                ProductListPage
            </Text>
            <FlatList
                data={products}
                renderItem={renderProducts}
            />
        </View>
    )

}