import { View, Text, FlatList, ScrollView } from 'react-native'
import React from 'react'
import style from './style'
import { useSelector } from 'react-redux'
import { RootState } from '../../features/store'
import { SelectedPlaceCard } from '../../components/cards'
import { EventList } from '../../utils/helper'

export const SelectedPlaceInfoScreen = () => {
    const filterPlace = useSelector((state: RootState) => state.users.EventInfo.place)
    const filteredData = EventList.filter(item =>
        item.place.toLowerCase().includes(filterPlace.toLowerCase())
    )
    const eventInfoAll = useSelector((state: RootState) => state.users.EventInfo)
    const { adress } = eventInfoAll;

    const currentDate = new Date();

    const filterFutureEvents = (item: any) => {
        const eventDate = new Date(item.eventStart);
        return eventDate >= currentDate;
    }

    const filterPastEvents = (item: any) => {
        const eventDate = new Date(item.eventStart);
        return eventDate < currentDate;
    }

    const formatDate = (dateString: any) => {
        const date = new Date(dateString)
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' }
        return date.toLocaleDateString('tr-TR', options)
    }

    const futureEvents = filteredData.filter(filterFutureEvents)
    const pastEvents = filteredData.filter(filterPastEvents)

    return (
        <View style={style.container}>
            <ScrollView>
                <View style={style.innerContainer}>
                    <Text style={style.title}>
                        Mekan Lokasyonu
                    </Text>
                    <View style={style.divider} />
                    <Text style={style.address}>
                        {adress}
                    </Text>
                </View>
                <View style={style.historyEventView}>
                    <Text style={style.title}>
                        Gelecek Etkinliklerimiz:
                    </Text>
                    <View style={style.divider} />
                    <FlatList
                        ItemSeparatorComponent={() => <View style={style.divider} />}
                        data={futureEvents}
                        renderItem={({ item }) => <SelectedPlaceCard
                            price={item.price}
                            eventDate={formatDate(item.eventStart) + " - " + formatDate(item.eventEnd)}
                            title={item.title}
                        />}
                    />
                </View>
                <View style={style.historyEventView}>
                    <Text style={style.title}>
                        Geçmiş Etkinliklerimiz:
                    </Text>
                    <View style={style.divider} />
                    <FlatList
                        ItemSeparatorComponent={() => <View style={style.divider} />}
                        data={pastEvents}
                        renderItem={({ item }) => <SelectedPlaceCard
                            price={item.price}
                            eventDate={formatDate(item.eventStart) + " - " + formatDate(item.eventEnd)}
                            title={item.title}
                        />}
                    />
                </View>
            </ScrollView>
        </View>
    )
}
