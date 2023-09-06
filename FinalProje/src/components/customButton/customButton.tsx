import { Text, Pressable } from 'react-native'
import React, { FC } from 'react'
import style from './style'
import IconE from 'react-native-vector-icons/FontAwesome'

interface ICustomButton {
    title: string,
    onClick?: () => void
    icon?: string
}
export const CustomButton: FC<ICustomButton> = ({ title, onClick, icon }) => {
    return (
        <Pressable
            onPress={onClick}
            style={style.mapButton}>
            <IconE
                name={icon as any}
                style={style.mapIcon}
            />
            <Text style={style.mapButtonText}>
                {title}
            </Text>
        </Pressable>
    )
}
