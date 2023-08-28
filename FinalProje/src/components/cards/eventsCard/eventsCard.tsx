import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import style from './style'
import { Muze } from '../../../assets'

export const EventsCard = () => {
    return (

        <View style={style.container}>
            <Image source={Muze} style={style.image} />
            <View style={style.infoView}>
                <Text numberOfLines={1} style={style.title}>Konuralp Müzesi</Text>
                <Text style={style.price}>650,00 TL</Text>
            </View>
            <View style={style.infoInnerView}>
                <Text numberOfLines={2} style={style.adress}>Alemdar Caddesi, Hacı Ahmet Sokak Düzce </Text>
                <TouchableOpacity>
                    <Text style={style.button}>SATIN AL</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}
