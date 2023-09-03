import { View, Text, Image, ScrollView, FlatList, Pressable, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import style from './style'
import { useNavigation, useRoute } from '@react-navigation/native'
import { SlaytSlider } from '../../components'
import IconI from 'react-native-vector-icons/dist/Ionicons'
import IconF from 'react-native-vector-icons/dist/FontAwesome5'
import { EventInfoRules } from '../../utils/helper'
import Share from 'react-native-share'

interface IEventDetailScreen {
    title: string
    place: string
    price: string
    eventStart: string
    eventEnd: string
    adress: string
    posterImage: Image
    eventInfo: string
}

export const EventDetailScreen: FC = () => {
    const navigation = useNavigation()
    const route = useRoute();
    const { title, eventStart, place, eventEnd, price, posterImage, adress, eventInfo } = route.params as IEventDetailScreen
    const shareButton = () => {
        const options = {
            message:
                'Etkinlik: ' + title + "\n" +
                "Mekan: " + place + "\n" +
                "Konum: " + adress + "\n" +
                "Fiyatı: " + price
        }
        Share.open(options)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    return (

        <View style={style.container}>
            <ScrollView>
                <SlaytSlider visibleInfo={false} />
                <IconI
                    onPress={() => navigation.goBack()}
                    name="chevron-back"
                    style={[style.Icon, { left: 20 }]}
                />
                <IconI
                    onPress={shareButton}
                    name="share-social"
                    style={[style.Icon, { right: 20 }]}
                />
                <View style={style.infoView}>
                    <Text style={style.title}>{title}</Text>
                    <View style={style.infoInnerView}>
                        <IconF
                            name="calendar-alt"
                            style={style.infoIcon}
                        />
                        <Text style={style.infoText}>
                            {eventStart} - {eventEnd}
                        </Text>
                    </View>
                    <View style={style.infoInnerView}>
                        <IconF
                            name="map-marker-alt"
                            style={style.infoIcon}
                        />
                        <Text style={style.infoText}>
                            {adress}
                        </Text>
                    </View>
                    <View style={style.mapView}>
                        <Pressable style={style.mapButton}>
                            <IconF
                                name="map-marked-alt"
                                style={style.mapIcon}
                            />
                            <Text style={style.mapButtonText}>
                                Konumu
                            </Text>
                        </Pressable>
                        <Pressable style={style.mapButton}>
                            <IconF
                                name="map-marked-alt"
                                style={style.mapIcon}
                            />
                            <Text style={style.mapButtonText}>
                                Mekanı İncele
                            </Text>
                        </Pressable>
                    </View>
                </View>
                <View style={style.divider} />
                <View style={style.eventInfoView}>
                    <Text style={style.eventInfoTitle} >
                        Etkinlik Hakkında
                    </Text>
                    <Text style={style.eventInfoText} >
                        {eventInfo}
                    </Text>
                </View>
                <View style={style.divider} />
                <View style={style.eventInfoView}>
                    <Text style={[style.eventInfoTitle, { color: "#D1011B" }]} >
                        Kurallar
                    </Text>
                    <FlatList
                        data={EventInfoRules}
                        renderItem={({ item }) =>
                            <Text style={style.eventInfoText} >
                                {item.text}
                            </Text>}
                    />
                </View>
                <View style={style.paddingView} />
            </ScrollView>
            <TouchableOpacity>
                <Text style={style.ticketButton}>
                    Bilet Satın Al
                </Text>
            </TouchableOpacity>

        </View>
    );
}
