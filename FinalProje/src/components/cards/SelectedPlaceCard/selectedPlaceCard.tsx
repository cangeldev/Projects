import { View, Text } from 'react-native'
import React, { FC } from 'react'
import style from './style'

interface ISelectedPlaceCard {
    title: string,
    eventDate: string,
    price: string
}

export const SelectedPlaceCard: FC<ISelectedPlaceCard> = ({ title, eventDate, price }) => {
    return (
        <View style={style.container}>
            <View>
                <Text style={style.titleText}>
                    {title}
                </Text>
                <Text style={style.dateText}>
                    {eventDate}
                </Text>
            </View>
            <Text style={style.priceText}>
                {price}
            </Text>
        </View>
    )
}
