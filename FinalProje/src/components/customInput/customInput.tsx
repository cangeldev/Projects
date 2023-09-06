import React, { useState } from 'react'
import { TextInput } from 'react-native'
import style from './style'
import colors from '../../assets/colors/colors'
import { useDispatch } from 'react-redux'
import { addFilterEvent } from '../../features/userSlice'

interface CustomInputProps {
  placeHolder: string
}

export const CustomInput: React.FC<CustomInputProps> = ({  placeHolder }) => { 

  const dispatch = useDispatch() 

  return (
    <TextInput     
      onChangeText={(text) => dispatch(addFilterEvent(text))}
      placeholder={placeHolder}
      style={style.txtInput}
      placeholderTextColor={colors.placeholderTextColor}
    />
  );
}