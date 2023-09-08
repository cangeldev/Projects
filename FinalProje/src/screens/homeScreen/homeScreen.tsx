import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import IconF from 'react-native-vector-icons/FontAwesome5';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../features/store';
import { CustomHeader, SlaytSlider } from '../../components';
import { EventList } from '../../utils/helper';
import { EventsCard } from '../../components/cards';
import style from './style';
import { FilterModal, HistoryEventsModal } from '../../components/modals';

export const HomeScreen = () => {
    const currentDate = new Date();
    const [displayedData, setDisplayedData] = useState([]);
    const dispatch = useDispatch();

    const filterText = useSelector((state: RootState) => state.users.EventInfo.filterEvent);
    const filterTextCategory = useSelector((state: RootState) => state.users.EventInfo.filterEventCategory);
    const selectedStartDate = useSelector((state: RootState) => state.users.EventInfo.selectedStart);
    const selectedEndDate = useSelector((state: RootState) => state.users.EventInfo.selectedEnd);

    const filterFutureEvents = (item: any) => {
        const eventDate = new Date(item.eventStart);
        return eventDate >= currentDate
    }
    const futureEvents = EventList.filter(filterFutureEvents)
    useEffect(() => {
        let updatedData = EventList.filter((item) => {
            const eventDate = new Date(item.eventStart);
            return eventDate >= currentDate;
        });

        if (filterText) {
            updatedData = updatedData.filter((item) =>
                item.title.toLowerCase().includes(filterText.toLowerCase())
            );
        }

        if (filterTextCategory) {
            updatedData = updatedData.filter((item) =>
                item.category.toLowerCase().includes(filterTextCategory.toLowerCase())
            );
        }

        if (selectedStartDate && selectedEndDate) {
            updatedData = updatedData.filter((item) => {
                const eventStartDate = item.eventStart
                const eventEndDate = item.eventEnd
                return (
                    selectedStartDate >= eventStartDate && selectedEndDate <= eventEndDate
                );
            });
        }

        setDisplayedData(updatedData);
    }, [filterText, filterTextCategory, selectedStartDate, selectedEndDate]);

    const eventCount = displayedData.length;


    const cleanFilterButton = () => {
        console.log("first")
        setDisplayedData(futureEvents)
    };
    const [isFilterModalVisible, setIsFilterModalVisible] = useState(false)
    const toggleFilterModal = () => {
        setIsFilterModalVisible(!isFilterModalVisible)
    }

    const [isHistoryModalVisible, setIsHistoryModalVisible] = useState(false)
    const toggleHistoryModal = () => {
        setIsHistoryModalVisible(!isHistoryModalVisible)
    }
    const renderHeader = () => (
        <>
            <HistoryEventsModal
                visibleModal={isHistoryModalVisible}
                closeModal={toggleHistoryModal}
            />
            <View style={style.filterView}>
                <Text style={style.activityCountText}>
                    {eventCount} Etkinlik Bulundu
                </Text>

                <View style={{ flexDirection: 'row' }}>
                    <Pressable onPress={cleanFilterButton}>
                        <Text style={style.buttonFilterText}>Filtre Temizle</Text>
                    </Pressable>
                    <Pressable onPress={toggleHistoryModal}>
                        <IconF name="history" style={style.historyButton} />
                    </Pressable>
                    <Pressable onPress={toggleFilterModal}>
                        <Text style={style.buttonText}>Filtre</Text>
                    </Pressable>
                </View>
            </View>
            <View style={style.sliderView}>
                <SlaytSlider />
            </View>
            <Text style={style.title}>Güncel Etkinlikler</Text>
        </>
    );

    const renderEvent = ({ item }) => (
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
            vip={item.vip}
        />
    );

    return (
        <View style={style.container}>
            <CustomHeader />
            <FilterModal
                visibleModal={isFilterModalVisible}
                closeModal={toggleFilterModal}
            />
            <FlatList
                showsVerticalScrollIndicator={false}
                data={displayedData}
                renderItem={renderEvent}
                ListHeaderComponent={renderHeader}
            />
        </View>
    );
};
