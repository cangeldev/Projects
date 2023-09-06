import { View, Text, FlatList } from 'react-native'
import React from 'react'
import style from './style'
import { useSelector } from 'react-redux'
import { RootState } from '../../features/store'

export const SelectedPlaceInfoScreen = () => {
    const eventInfoAll = useSelector((state: RootState) => state.users.EventInfo);
    const { title, adress, place, price, eventStart, eventEnd, eventInfo } = eventInfoAll;
    const render = () => {

    }
    const flatListData = [
        {
            id: '1',
            title: 'Başlık 1',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            id: '2',
            title: 'Başlık 2',
            text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: '3',
            title: 'Başlık 3',
            text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
        },
    ]
    return (
        <View style={style.container}>
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
                    Süresi Geçmiş Etkinliklerimiz:
                </Text>
                <FlatList data={flatListData} renderItem={({ item }) => <Text>{item.text}</Text>} />
            </View>

        </View>
    )
}