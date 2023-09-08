import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState, FC } from 'react'
import style from './style'
import { useDispatch } from 'react-redux'
import DatePicker from 'react-native-date-picker'
import IconM from 'react-native-vector-icons/MaterialCommunityIcons'
import { addSelectedStart, addSelectedEnd } from '../../features/userSlice'

interface IDateSelect {
    start: boolean
    title: string
}

export const DateSelect: FC<IDateSelect> = ({ title, start }) => {
    const dispatch = useDispatch()
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const today = new Date()
    const formatDate = (selectedDate: Date) => {
        const day = selectedDate.getDate();
        return day.toString();
    }
    const getDayText = (selectedDate: Date) => {
        const day = selectedDate.getDay();
        const dayNames = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
        const dayText = dayNames[day];
        return dayText;
    }
    const getMonthText = (selectedDate: Date) => {
        const month = selectedDate.getMonth();
        const monthNames = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
        const monthText = monthNames[month];
        return monthText;
    }
    return (
        <>
            <DatePicker
                minimumDate={today}
                cancelText='İptal'
                confirmText='Onayla'
                title={"Lütfen Tarih Seçiniz:"}
                mode='date'
                modal
                open={open}
                date={date}
                onConfirm={(selectedDate) => {
                    setOpen(false);
                    const formattedDate = selectedDate.toISOString().substring(0, 19);
                    setDate(selectedDate)
                    start == true ? dispatch(addSelectedStart(formattedDate)) : dispatch(addSelectedEnd(formattedDate))
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />
            <TouchableOpacity
                onPress={() => setOpen(true)}
                style={style.selectDateView}
            >
                <Text>
                    {title}
                </Text>
                <View style={style.innerDateView}>
                    <Text style={style.day}>
                        {formatDate(date)}
                    </Text>
                    <View>
                        <Text style={style.dateTxt}>
                            {getMonthText(date)}
                        </Text>
                        <Text style={style.dateTxt}>
                            {getDayText(date)}
                        </Text>
                    </View>
                    <IconM
                        name="calendar-month"
                        size={40}
                        style={style.dateIcon}
                    />
                </View>
            </TouchableOpacity>
        </>
    )
}