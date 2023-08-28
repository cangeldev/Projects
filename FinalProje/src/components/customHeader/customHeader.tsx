import { View, Text, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import style from './style'
import colors from '../../assets/colors/colors'
import IconI from 'react-native-vector-icons/dist/Ionicons';
import IconO from 'react-native-vector-icons/dist/Octicons';
import IconE from 'react-native-vector-icons/dist/Entypo';

export const CustomHeader = () => {
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
                <TouchableOpacity>
                    <Text style={style.buttonText}>
                        Filtre
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}