import { View, Text, Modal, TouchableOpacity } from 'react-native';
import React, { FC } from 'react';
import style from './style';

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
                    <Text style={style.titleText}>
                        Filtre
                    </Text>
                    <TouchableOpacity onPress={closeModal}>
                        <Text style={style.closeText}>
                            Kapat
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};
