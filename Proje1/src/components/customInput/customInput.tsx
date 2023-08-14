import { View, Text, TextInput, } from 'react-native'
import React, { FC, useState } from 'react'
import style from './style'

interface ICustomInput {
    title: string
    onInputChange: (inputText: any) => void;
}
export const CustomInput: FC<ICustomInput> = ({ title, onInputChange }) => {
    const [inputText, setInputText] = useState("")
    const handleTextChange = (text: any) => {
        setInputText(text)
        onInputChange(text)
    }
    return (
        <View>
            <TextInput
                style={style.inputContainer}
                onChangeText={handleTextChange}
            />
            <Text style={style.text}>
                {title}
            </Text>
        </View>
    )
}