import { View, Text, TextInput } from 'react-native'
import React, { FC, useState } from 'react'
import style from './style'

interface ICustomPaymentInput {
    title: string,
    placeHolder: string
    maxlength?: number,
    keyboardType?: any,
    secureTextEntry?: boolean,
    changeText: (text: string) => void
}

export const CustomPaymentInput: FC<ICustomPaymentInput> = ({ placeHolder, title, maxlength, keyboardType, changeText, secureTextEntry }) => {
    const [txt, setTxt] = useState("")
    const handleTextChange = (inputText: string) => {
        setTxt(inputText)
        changeText(inputText)
    }
    return (
        <View style={style.container}>
            <Text style={style.title}>
                {title}
            </Text>
            <TextInput
                autoCapitalize='none'
                onChangeText={handleTextChange}
                keyboardType={keyboardType}
                maxLength={maxlength}
                style={style.txtInput}
                placeholder={placeHolder}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}