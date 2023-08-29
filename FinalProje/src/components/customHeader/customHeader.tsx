import { View, Text, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import React, { useState } from 'react'
import style from './style'
import colors from '../../assets/colors/colors'
import IconI from 'react-native-vector-icons/dist/Ionicons'
import IconO from 'react-native-vector-icons/dist/Octicons'
import IconE from 'react-native-vector-icons/dist/Entypo'
import { FilterModal } from '../filterModal'

export const CustomHeader = () => {

    const [isFilterModalVisible, setIsFilterModalVisible] = useState(false)
    const toggleFilterModal = () => {
        setIsFilterModalVisible(!isFilterModalVisible)
    }

    return (
        <View style={style.container}>
            <StatusBar
                backgroundColor={colors.white}
                barStyle={"dark-content"}
            />
            <View style={style.headerView}>
                <Text style={style.headerTitle}>
                    Etkinlik
                </Text>
                <IconE
                    name="log-out"
                    style={style.logoutIcon}
                />
            </View>
            <View style={style.divider} />
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
                <TouchableOpacity onPress={toggleFilterModal}>
                    <Text style={style.buttonText}>
                        Filtre
                    </Text>
                </TouchableOpacity>
            </View>
            <FilterModal
                visibleModal={isFilterModalVisible}
                closeModal={toggleFilterModal}
            />
        </View>
    )
}
