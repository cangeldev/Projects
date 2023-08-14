import { Text } from 'react-native'
import React, { FC } from 'react'
import style from './style'

interface IText {
    text: string,
    price: number
}
export const CustomText: FC<IText> = ({ text, price }) => {
    return (
        <Text style={[style.products, price > 50 ? style.highPriceStyle : null]}>
            {text}
        </Text>
    )
}