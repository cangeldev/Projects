import { View, Text, Image, Pressable } from 'react-native'
import React, { FC } from 'react'
import style from './style'
import { useNavigation } from '@react-navigation/native'
import IconF from 'react-native-vector-icons/FontAwesome5'
import { useDispatch } from 'react-redux'
import {
    addAdrees,
    addEventEnd,
    addEventInfo,
    addEventStart,
    addLatitudeXInfo,
    addLongitudeYInfo,
    addPlace,
    addPrice,
    addTitle,
    addVip
} from '../../../features/userSlice'

interface IEventsCard {
    title: string
    price: string
    place: string
    eventStart: string
    eventEnd: string
    latitudeX: number
    longitudeY: number
    adress: string
    eventInfo: string
    visible?: boolean
    disabled?: boolean
    posterImage: Image
    vip?: string
}
export const EventsCard: FC<IEventsCard> = ({ vip, latitudeX, longitudeY, title, price, place, eventStart, eventEnd, adress, posterImage, disabled, visible, eventInfo }) => {
    const dispatch = useDispatch()
    const navigation = useNavigation<any>()
    const toggleButton = () => {
        navigation.navigate("EventDetailScreen", { posterImage: posterImage })
        dispatch(addTitle(title))
        dispatch(addPlace(place))
        dispatch(addPrice(price))
        dispatch(addEventStart(eventStart))
        dispatch(addEventEnd(eventEnd))
        dispatch(addEventInfo(eventInfo))
        dispatch(addAdrees(adress))
        dispatch(addLatitudeXInfo(latitudeX))
        dispatch(addLongitudeYInfo(longitudeY))
        dispatch(addVip(vip))
    }
    const formatDate = (dateString: any) => {
        const date = new Date(dateString)
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' }
        return date.toLocaleDateString('tr-TR', options)
    }
    return (
        <Pressable
            disabled={disabled}
            onPress={toggleButton}>
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
                                {formatDate(eventStart)} - {formatDate(eventEnd)}
                            </Text>
                        </View> :
                        null
                }
            </View>
        </Pressable>
    )
}
