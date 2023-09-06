import { View, Text } from 'react-native'
import React, { useMemo, useState } from 'react'
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group'
import style from './style'
import colors from '../../assets/colors/colors'
import { useDispatch, useSelector } from 'react-redux'
import { addFilterEventCategory } from '../../features/userSlice'
import { RootState } from '../../features/store'

export const RadioButtonGroup = () => {
    const dispatch = useDispatch()
    const test = useSelector((state: RootState) => state.users.EventInfo.filterEventCategory)
    const radioButtons: RadioButtonProps[] = useMemo(() => ([

        {
            id: '1',
            label: 'Eğitim & Fazlası',
            value: 'option1',
            color: colors.headerButtonColor,
            size: 20,
            labelStyle: {
                color: colors.black,
                marginLeft: 15,
                fontSize: 17

            }
        },
        {
            id: '2',
            label: 'Tiyatro Gösterileri',
            value: 'option2',
            color: colors.headerButtonColor,
            size: 20,
            labelStyle: {
                color: colors.black,
                marginLeft: 15,
                fontSize: 17
            }

        },
        {
            id: '3',
            label: 'Resim Sergisi',
            value: 'option3',
            color: colors.headerButtonColor,
            size: 20,
            labelStyle: {
                color: colors.black,
                marginLeft: 15,
                fontSize: 17
            }
        },
        {
            id: '4',
            label: 'Galeri',
            value: 'option4',
            color: colors.headerButtonColor,
            size: 20,
            labelStyle: {
                color: colors.black,
                marginLeft: 15,
                fontSize: 17
            }
        },
        {
            id: '5',
            label: 'Konser Etkinlikleri',
            value: 'option5',
            color: colors.headerButtonColor,
            size: 20,
            labelStyle: {
                color: colors.black,
                marginLeft: 15,
                fontSize: 17
            }
        },
        {
            id: '6',
            label: 'Eğlence ',
            value: 'option6',
            color: colors.headerButtonColor,
            size: 20,
            labelStyle: {
                color: colors.black,
                marginLeft: 15,
                fontSize: 17
            }
        },
        {
            id: '7',
            label: 'Çocuk Aktiviteleri',
            value: 'option7',
            color: colors.headerButtonColor,
            size: 20,
            labelStyle: {
                color: colors.black,
                marginLeft: 15,
                fontSize: 17
            }
        },
    ]), [])
    const [selectedId, setSelectedId] = useState<string | undefined>()
    const getSelectedLabel = () => {
        const selectedRadioButton = radioButtons.find(button => button.id === selectedId);
        dispatch(addFilterEventCategory(selectedRadioButton ? selectedRadioButton.label : ''))
        return selectedRadioButton ? selectedRadioButton.label : '';
    };
    return (
        <View style={style.container}>
            <Text style={style.titleText}>
                Filtre
            </Text>
            <RadioGroup
                containerStyle={style.containerStyle}
                radioButtons={radioButtons}
                onPress={setSelectedId}
                selectedId={selectedId}
            />
            <Text style={{color:"white"}}>
                Seçilen: {getSelectedLabel()}
            </Text>
        </View>
    );
}