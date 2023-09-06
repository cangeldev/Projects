import { View, Text, Modal, Pressable } from 'react-native'
import React, { FC } from 'react'
import style from './style'
import { RadioButtonGroup } from '../../radioButtonGroup'
import IconI from 'react-native-vector-icons/AntDesign'

interface IFilterModal {
    visibleModal: boolean
    closeModal: () => void
}

export const FilterModal: FC<IFilterModal> = ({ visibleModal, closeModal }) => {
    return (
        <Modal
            statusBarTranslucent={true}
            animationType="slide"
            transparent={true}
            visible={visibleModal}
            onRequestClose={closeModal}>
            <View style={style.container}>
                <View style={style.innerContainer}>
                    <Pressable onPress={closeModal}>
                        <IconI
                            name="closecircle"
                            style={style.closeIcon}
                        />
                    </Pressable>
                    <RadioButtonGroup />
                    <Pressable onPress={closeModal}>
                        <Text style={style.listButtonText}>
                            LİSTELE
                        </Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
};
