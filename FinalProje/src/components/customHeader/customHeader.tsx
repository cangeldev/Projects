import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import style from './style'
import colors from '../../assets/colors/colors'
import IconF from 'react-native-vector-icons/dist/Feather';
import IconO from 'react-native-vector-icons/dist/Octicons';
import IconE from 'react-native-vector-icons/dist/Entypo';

export const CustomHeader = () => {
    return (
        <View style={style.container}>
            <Text style={style.headerTitle}>
                Etkinlik
            </Text>
            <IconE name="log-out" style={style.logoutIcon} />
            <View style={style.divider} />
            <View style={{ justifyContent: "center" }}>
                <TextInput
                    placeholder='Etkinlik veya konser ara...'
                    style={style.txtInput}
                    placeholderTextColor={colors.placeholderTextColor}
                />
                <IconF name="search" style={style.searchIcon} />
                <IconO name="sort-desc" style={style.sortIcon} />
            </View>
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