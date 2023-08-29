import { View, Text, Modal, TouchableOpacity, Pressable } from 'react-native';
import React, { FC } from 'react';
import style from './style';
import { RadioButtonGroup } from '../radioButtonGroup';
import colors from '../../assets/colors/colors';
import IconI from 'react-native-vector-icons/dist/AntDesign';

interface IFilterModal {
    visibleModal: boolean;
    closeModal: () => void;
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

                    <Pressable onPress={() => console.log("first")}>
                        <Text style={style.listButtonText}>
                            LİSTELE
                        </Text>
                    </Pressable>

                </View>

            </View>
        </Modal>
    );
};