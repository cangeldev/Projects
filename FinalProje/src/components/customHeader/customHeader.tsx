import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import style from './style'
import colors from '../../assets/colors/colors'
import IconI from 'react-native-vector-icons/dist/Ionicons'
import IconO from 'react-native-vector-icons/dist/Octicons'
import IconF from 'react-native-vector-icons/dist/FontAwesome5'
import { FilterModal } from '../filterModal'
import { HistoryEventsModal } from '../historyEventsModal/historyEventsModal'
export const CustomHeader = () => {

    const [isFilterModalVisible, setIsFilterModalVisible] = useState(false)
    const [isHistoryModalVisible, setIsHistoryModalVisible] = useState(false)
    const toggleFilterModal = () => {
        setIsFilterModalVisible(!isFilterModalVisible)
    }
    const toggleHistoryModal = () => {
        setIsHistoryModalVisible(!isHistoryModalVisible)
    }

    return (
        <View style={style.container}>
            <View style={style.txtInputView}>
                <TextInput
                    placeholder='Etkinlik veya konser arayın'
                    style={style.txtInput}
                    placeholderTextColor={colors.placeholderTextColor}
                />
                <IconI
                    name="search-sharp"
                    style={style.searchIcon}
                />
                <IconO
                    name="sort-desc"
                    style={style.sortIcon}
                />
            </View>
            <View style={style.filterView}>
                <Text style={style.activityCountText}>
                    12 Etkinlik Bulundu
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
            <FilterModal
                visibleModal={isFilterModalVisible}
                closeModal={toggleFilterModal}
            />
            <HistoryEventsModal
                visibleModal={isHistoryModalVisible}
                closeModal={toggleHistoryModal}
            />
        </View>
    )
}
