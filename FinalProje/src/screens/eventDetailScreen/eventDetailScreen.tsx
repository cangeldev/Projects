import { View, Text, Image, ScrollView, FlatList, Pressable, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import style from './style'
import { useNavigation, useRoute } from '@react-navigation/native'
import { SlaytSlider } from '../../components'
import IconI from 'react-native-vector-icons/dist/Ionicons'
import IconF from 'react-native-vector-icons/dist/FontAwesome5'
import { EventInfoRules } from '../../utils/helper'
interface IEventDetailScreen {
    title: string,
    date: string,
    adress: string,
    posterImage: Image,
}

export const EventDetailScreen: FC = () => {
    const navigation = useNavigation()
    const route = useRoute();
    const { title, date, posterImage, adress } = route.params as IEventDetailScreen
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
                            {date}
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
                        Etkinlik Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Maiores,
                        earum. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Qui consequuntur aperiam dolorem. Nostrum ea vel in praesentium quam
                        quis provident debitis deserunt! Voluptatibus dicta, necessitatibus illum
                        possimus sapiente vel nostrum.
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
                            <Text style={style.eventInfoText} >{item.text}</Text>}
                    />
                </View>
                <View style={style.paddingView}/>
            </ScrollView>
            <TouchableOpacity>
                    <Text style={style.ticketButton}>
                        Bilet Satın Al
                    </Text>
                </TouchableOpacity>
        </View>
    );
}
