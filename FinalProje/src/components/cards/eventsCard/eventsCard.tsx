import { View, Text, Image, Pressable } from 'react-native'
import React, { FC } from 'react'
import style from './style'
import { useNavigation } from '@react-navigation/native'

interface IEventsCard {
    title: string
    price: string
    date: string
    adress: string
    posterImage: Image
}
export const EventsCard: FC<IEventsCard> = ({ title, price, date, adress, posterImage }) => {

    const navigation = useNavigation<any>()

    return (
        <Pressable
            onPress={() => navigation.navigate("EventDetailScreen",
                { title: title, date: date, posterImage: posterImage, adress: adress })}>
            <View style={style.container}>
                <View style={style.imageView}>
                    <Image
                        source={posterImage as any}
                        style={style.image}
                    />
                </View>
                <View style={style.infoView}>
                    <Text numberOfLines={1} style={style.title}>
                        {title}
                    </Text>
                    <Text style={style.price}>
                        {price}
                    </Text>
                </View>
                <View style={style.infoInnerView}>
                    <Text numberOfLines={2} style={style.adress}>
                        {adress}
                    </Text>
                    <Pressable>
                        <Text style={style.button}>
                            SATIN AL
                        </Text>
                    </Pressable>
                </View>
            </View>
        </Pressable>
    )
}
