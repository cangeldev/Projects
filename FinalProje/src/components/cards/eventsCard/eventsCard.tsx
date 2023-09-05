import { View, Text, Image, Pressable } from 'react-native'
import React, { FC } from 'react'
import style from './style'
import { useNavigation } from '@react-navigation/native'
import IconF from 'react-native-vector-icons/dist/FontAwesome5'

interface IEventsCard {
    title: string
    price: string
    place: string
    eventStart: string
    eventEnd: string
    adress: string
    eventInfo: string
    visible?: boolean
    disabled?: boolean
    posterImage: Image
}
export const EventsCard: FC<IEventsCard> = ({ title, price, place, eventStart, eventEnd, adress, posterImage, disabled, visible, eventInfo }) => {

    const navigation = useNavigation<any>()

    return (
        <Pressable
            disabled={disabled}
            onPress={() => navigation.navigate("EventDetailScreen",
                {
                    title: title,
                    eventStart: eventStart,
                    place: place,
                    price: price,
                    eventEnd: eventEnd,
                    posterImage: posterImage,
                    adress: adress,
                    eventInfo: eventInfo
                })}>
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
                    {
                        visible == true ?
                            <Text style={style.price}>
                                {price}
                            </Text> : null
                    }
                </View>
                <View style={style.infoInnerView}>
                    <Text numberOfLines={2} style={style.adress}>
                        {adress}
                    </Text>
                    {
                        visible == true ?
                            <Pressable>
                                <Text style={style.button}>
                                    SATIN AL
                                </Text>
                            </Pressable> :
                            null
                    }              


                </View>
                {
                        visible == false ?
                            <View style={style.infoDateView}>
                                <IconF
                                    name="calendar-alt"
                                    style={style.infoIcon}
                                />
                                <Text style={style.infoText}>
                                    {eventStart} - {eventEnd}
                                </Text>
                            </View> :
                            null
                    }
            </View>
        </Pressable>
    )
}
