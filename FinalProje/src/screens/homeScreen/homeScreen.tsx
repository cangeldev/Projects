import { View, Text, FlatList, Pressable } from 'react-native';
import React, { useState } from 'react';
import { CustomHeader, FilterModal, SlaytSlider } from '../../components';
import { EventsCard } from '../../components/cards';
import style from './style';
import { EventList } from '../../utils/helper';
import IconF from 'react-native-vector-icons/dist/FontAwesome5'
import { HistoryEventsModal } from '../../components/historyEventsModal';
import { useSelector } from 'react-redux';
import { RootState } from '../../features/store';

export const HomeScreen = () => {

    const filterText=useSelector((state:RootState)=>state.users.EventInfo.filterEvent)
    const eventCount = EventList.length;
    const [isFilterModalVisible, setIsFilterModalVisible] = useState(false)
    const [isHistoryModalVisible, setIsHistoryModalVisible] = useState(false)

    const toggleFilterModal = () => {
        setIsFilterModalVisible(!isFilterModalVisible)
    }
    const toggleHistoryModal = () => {
        setIsHistoryModalVisible(!isHistoryModalVisible)
    }

    
    const filteredData = EventList.filter(item =>
        item.title.toLowerCase().includes(filterText.toLowerCase())
      );
    const renderHeader = () => (
        <>
          
            <FilterModal
                visibleModal={isFilterModalVisible}
                closeModal={toggleFilterModal}
            />
            <HistoryEventsModal
                visibleModal={isHistoryModalVisible}
                closeModal={toggleHistoryModal}
            />
            <View style={style.filterView}>
                <Text style={style.activityCountText}>
                    {eventCount} Etkinlik Bulundu
                </Text>

                <View style={{ flexDirection: "row" }}>
                    <Pressable onPress={toggleHistoryModal}>
                        <IconF
                            name="history"
                            style={style.historyButton}
                        />
                    </Pressable>
                    <Pressable onPress={toggleFilterModal}>
                        <Text style={style.buttonText}>
                            Filtre
                        </Text>
                    </Pressable>
                </View>
            </View>
            <View style={style.sliderView}>
                <SlaytSlider visibleInfo={true} />
            </View>
            <Text style={style.title}>
                Güncel Etkinlikler
            </Text>
        </>
    );
    const render =
        (({ item }: any) =>
            <EventsCard
                title={item.title}
                place={item.place}
                adress={item.adress}
                eventStart={item.eventStart}
                eventEnd={item.eventEnd}
                eventInfo={item.eventInfo}
                price={item.price}
                posterImage={item.posterImage}
                latitudeX={item.latitudeX}
                longitudeY={item.longitudeY}
                visible={true}
            />)
    return (
        <View style={style.container}>
              <CustomHeader />
            <FlatList
                showsVerticalScrollIndicator={false}
                data={filteredData}
                renderItem={render}
                ListHeaderComponent={renderHeader}
            />
        </View>
    );
};