import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import style from './style'
import colors from '../../assets/colors/colors'
import IconI from 'react-native-vector-icons/dist/Ionicons'
import IconO from 'react-native-vector-icons/dist/Octicons'
import { FilterModal } from '../filterModal'

export const CustomHeader = () => {

    const [isFilterModalVisible, setIsFilterModalVisible] = useState(false)
    const toggleFilterModal = () => {
        setIsFilterModalVisible(!isFilterModalVisible)
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
                    120 Etkinlik Bulundu
                </Text>
                <Pressable onPress={toggleFilterModal}>
                    <Text style={style.buttonText}>
                        Filtre
                    </Text>
                </Pressable>
            </View>
            <FilterModal
                visibleModal={isFilterModalVisible}
                closeModal={toggleFilterModal}
            />
        </View>
    )
}
