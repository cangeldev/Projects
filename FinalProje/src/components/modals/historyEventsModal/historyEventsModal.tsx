import { View, Modal, Text, Pressable, FlatList } from 'react-native'
import React, { FC } from 'react'
import style from './style'
import IconI from 'react-native-vector-icons/AntDesign'
import { EventList } from '../../../utils/helper'
import { EventsCard } from '../../cards'

interface IHistoryEventsModal {
    visibleModal: boolean
    closeModal: () => void
}
export const HistoryEventsModal: FC<IHistoryEventsModal> = ({ visibleModal, closeModal }) => {
    const currentDate = new Date()
    const filterPastEvents = (item: any) => {
        const eventDate = new Date(item.eventStart);
        return eventDate < currentDate
    }
    const pastEvents = EventList.filter(filterPastEvents)
    return (
        <Modal
            statusBarTranslucent={true}
            animationType="slide"
            transparent={true}
            visible={visibleModal}
            onRequestClose={closeModal}>
            <View style={style.container}>
                <View style={style.innerContainer}>
                    <Text style={style.title}>
                        Geçmiş Etkinliklerimiz
                    </Text>
                    <Pressable onPress={closeModal}>
                        <IconI
                            name="closecircle"
                            style={style.closeIcon}
                        />
                    </Pressable>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={pastEvents}
                        renderItem={({ item }) =>
                            <EventsCard
                                title={item.title}
                                place={item.place}
                                adress={item.adress}
                                eventStart={item.eventStart}
                                eventEnd={item.eventEnd}
                                eventInfo={item.eventInfo}
                                price={item.price}
                                posterImage={item.posterImage}
                                disabled={true}
                                visible={false}
                                latitudeX={0}
                                longitudeY={0}
                            />}
                    />
                </View>
            </View>
        </Modal>
    );
};
