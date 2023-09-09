import { View, Modal, Pressable, } from 'react-native'
import React, { FC } from 'react'
import style from './style'
import IconI from 'react-native-vector-icons/AntDesign'
import { DateSelect } from '../../dateSelect'
import { CustomButton } from '../../customButton'

interface ISelectDateModal {
    visibleModal: boolean
    closeModal: () => void
}

export const SelectDateModal: FC<ISelectDateModal> = ({ visibleModal, closeModal }) => {
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

                    <DateSelect
                        title='Başlangış Tarihi Seçiniz:'
                        start={false}
                    />
                    <DateSelect
                        title='Bitiş Tarihi Seçiniz:'
                        start={true}
                    />
                    <View style={style.selectDateButton}>
                        <CustomButton
                            title='Onayla'
                            onClick={closeModal}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};
