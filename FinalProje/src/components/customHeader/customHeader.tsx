import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import style from './style'
import colors from '../../assets/colors/colors'

export const CustomHeader = () => {
    return (
        <View style={style.container}>
            <Text style={style.headerTitle}>
                Etkinlik
            </Text>
            <View style={style.divider} />
            <TextInput
                placeholder='Etkinlk veya konser ara...'
                style={style.txtInput}
                placeholderTextColor={colors.placeholderTextColor}
            />
            <View style={style.filterView}>
                <Text style={{ color: "black", fontSize: 11 }}>
                    120 Etkinlik Bulundu
                </Text>
                <TouchableOpacity>
                    <Text style={style.buttonText}>
                        Filtre
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}