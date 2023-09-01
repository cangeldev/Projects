import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { CustomHeader, SlaytSlider } from '../../components';
import { EventsCard } from '../../components/cards';
import style from './style';
import { EventList } from '../../utils/helper';

export const HomeScreen = () => {
    const renderHeader = () => (
        <>
            <CustomHeader />
            <View style={style.sliderView}>
                <SlaytSlider visibleInfo={true} />
            </View>
            <Text style={style.title}>
                Güncel Etkinlikler
            </Text>
        </>
    );

    return (
        <View style={style.container}>
            <FlatList
                data={EventList}
                renderItem={({ item }) =>
                    <EventsCard
                        title={item.title}
                        adress={item.adress}
                        eventStart={item.eventStart}
                        eventEnd={item.eventEnd}
                        eventInfo={item.eventInfo}
                        price={item.price}
                        posterImage={item.posterImage}
                    />}
                ListHeaderComponent={renderHeader}
            />
        </View>
    );
};