import { View } from 'react-native'
import React from 'react'
import style from './style'
import IconI from 'react-native-vector-icons/Ionicons'
import IconO from 'react-native-vector-icons/Octicons'
import { CustomInput } from '../customInput'

export const CustomHeader = () => {

    return (
        <View style={style.container}>
            <View style={style.txtInputView}>
                <CustomInput
                    placeHolder='Etkinlik veya konser arayın'
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
        </View>
    )
}
