import { View, Text, Image, ScrollView, FlatList, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import style from './style'
import { useNavigation } from '@react-navigation/native'
import { SlaytSlider } from '../../components'
import IconI from 'react-native-vector-icons/dist/Ionicons'
import IconF from 'react-native-vector-icons/dist/FontAwesome5'
import IconE from 'react-native-vector-icons/dist/FontAwesome'
import { EventInfoRules } from '../../utils/helper'
import Share from 'react-native-share'
import { useSelector } from 'react-redux'
import { RootState } from '../../features/store'
import { MapModal } from '../../components/mapModal'
import { SelectedPlaceInfoScreen } from '../selectedPlaceInfoScreen'

export const EventDetailScreen = () => {
    const navigation = useNavigation<any>()
    const [isMapModalVisible, setIsMapModalVisible] = useState(false)
    const toggleMapModal = () => {
        setIsMapModalVisible(!isMapModalVisible)
    }

    const eventInfoAll = useSelector((state: RootState) => state.users.EventInfo);
    const { title, adress, place, price, eventStart, eventEnd, eventInfo } = eventInfoAll;

    const shareEvent = () => {
        const options = {
            message: `Etkinlik: ${title}\nMekan: ${place}\nKonum: ${adress}\nFiyatı: ${price}`,
        };

        Share.open(options)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };
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
                    onPress={shareEvent}
                    name="share-social"
                    style={[style.Icon, { right: 20 }]}
                />
                <View style={style.infoView}>
                    <Text style={style.title}>
                        {title}
                    </Text>
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
                        <Pressable
                            onPress={() =>  navigation.navigate(SelectedPlaceInfoScreen)}
                            style={style.mapButton}>
                            <IconE
                                name="search"
                                style={style.mapIcon}
                            />
                            <Text style={style.mapButtonText}>
                                Mekanı İncele
                            </Text>
                        </Pressable>
                        <Pressable
                            onPress={toggleMapModal}
                            style={style.mapButton}>
                            <IconF
                                name="map-marked-alt"
                                style={style.mapIcon}
                            />
                            <Text style={style.mapButtonText}>
                                Konumu
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
            <MapModal
                visibleModal={isMapModalVisible}
                closeModal={toggleMapModal} />
        </View>
    );
}
