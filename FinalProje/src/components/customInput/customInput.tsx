import React, { useState } from 'react'
import { TextInput } from 'react-native'
import style from './style'
import colors from '../../assets/colors/colors'

interface CustomInputProps {
  onInputChange: (inputText: string) => void
  placeHolder: string
}

export const CustomInput: React.FC<CustomInputProps> = ({ onInputChange, placeHolder }) => {
  const [inputText, setInputText] = useState('')

  const handleTextChange = (text: string) => {
    setInputText(text)
    onInputChange(text)
  }

  return (
    <TextInput
      value={inputText}
      onChangeText={handleTextChange}
      placeholder={placeHolder}
      style={style.txtInput}
      placeholderTextColor={colors.placeholderTextColor}
    />
  );
}