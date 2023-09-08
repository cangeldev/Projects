import { View, Text } from 'react-native'
import React, { FC } from 'react'
import style from './style'

interface ICustomTextView {
    title: string
    text: string
}

export const CustomTextView: FC<ICustomTextView> = ({ title, text }) => {
    return (
        <View style={style.container}>
            <Text style={style.title}>
                {title}
            </Text>
            <Text style={style.text}>
                {text}
            </Text>
        </View>

    )
}
