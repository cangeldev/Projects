import { View, Text, FlatList, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import style from './style'
import axios from 'axios'

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
               <Text style={[style.products, item.price > 50 ? style.highPriceStyle : null]}>
                {item.productName}
            </Text>
            <Text style={[style.products, item.price > 50 ? style.highPriceStyle : null]}>
                {item.price}
            </Text>
            <Text style={[style.products, item.price > 50 ? style.highPriceStyle : null]}>
                {item.stock}
            </Text>
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