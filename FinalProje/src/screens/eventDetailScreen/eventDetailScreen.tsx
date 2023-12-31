import { View, Text, Image, ScrollView, FlatList } from 'react-native'
import React, { FC, useState } from 'react'
import style from './style'
import { useNavigation, useRoute } from '@react-navigation/native'
import IconI from 'react-native-vector-icons/Ionicons'
import IconF from 'react-native-vector-icons/FontAwesome5'
import { EventInfoRules } from '../../utils/helper'
import Share from 'react-native-share'
import { useSelector } from 'react-redux'
import { RootState } from '../../features/store'
import { SelectedPlaceInfoScreen } from '../selectedPlaceInfoScreen'
import { MapModal } from '../../components/modals'
import { CustomButton } from '../../components'

interface IEventDetailScreen {
    posterImage: Image
}

export const EventDetailScreen: FC = () => {
    const navigation = useNavigation<any>()
    const route = useRoute();
    const { posterImage } = route.params as IEventDetailScreen

    const [isMapModalVisible, setIsMapModalVisible] = useState(false)
    const toggleMapModal = () => {
        setIsMapModalVisible(!isMapModalVisible)
    }

    const eventInfoAll = useSelector((state: RootState) => state.users.EventInfo);
    const { title, adress, place, price, eventStart, eventEnd, eventInfo } = eventInfoAll

    const shareEvent = () => {
        const options = {
            message: `Etkinlik: ${title}\nMekan: ${place}\nKonum: ${adress}\nFiyatı: ${price}`,
        }

        Share.open(options)
            .then((res) => null)
            .catch((err) => null);
    }
    const formatDate = (dateString: any) => {
        const date = new Date(dateString)
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' }
        return date.toLocaleDateString('tr-TR', options)
    }
    return (
        <View style={style.container}>
            <ScrollView>
                <View style={style.imageView}>
                    <Image
                        source={posterImage as any}
                        style={style.image}
                    />
                </View>
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
                            {formatDate(eventStart)} - {formatDate(eventEnd)}
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
                        <View style={style.buttonView}>
                            <CustomButton
                                icon='search'
                                title='Mekanı İncele'
                                onClick={() => navigation.navigate(SelectedPlaceInfoScreen)}
                            />
                        </View>
                        <View style={style.buttonView}>
                            <CustomButton
                                icon='map-marker'
                                title='Konumu'
                                onClick={toggleMapModal}
                            />
                        </View>
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
            <View style={style.customButtonView}>
                <CustomButton
                    title=' Bilet Satın Al'
                    onClick={() => navigation.navigate("PaymentScreen")}
                />
            </View>
            <MapModal
                visibleModal={isMapModalVisible}
                closeModal={toggleMapModal}
            />
        </View>
    );
}
