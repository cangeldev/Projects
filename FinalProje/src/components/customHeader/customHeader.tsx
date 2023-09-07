import { View } from 'react-native'
import React, { useState } from 'react'
import style from './style'
import IconI from 'react-native-vector-icons/Ionicons'
import IconO from 'react-native-vector-icons/Octicons'
import { CustomInput } from '../customInput'
import { SelectDateModal } from '../modals'

export const CustomHeader = () => {
    const [isSelectDateModalVisible, setIsSelectDateModalVisible] = useState(false)
    const toggleDateModal = () => {
        setIsSelectDateModalVisible(!isSelectDateModalVisible)

    }
    return (
        <View style={style.container}>
            <SelectDateModal
                visibleModal={isSelectDateModalVisible}
                closeModal={toggleDateModal}
            />
            <View style={style.txtInputView}>
                <CustomInput
                    placeHolder='Etkinlik veya konser arayın'
                />
                <IconI
                    name="search-sharp"
                    style={style.searchIcon}
                />
                <IconO
                    onPress={toggleDateModal}
                    name="sort-desc"
                    style={style.sortIcon}
                />
            </View>
        </View>
    )
}
