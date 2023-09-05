
import { View, Modal, Pressable, } from 'react-native'
import React, { FC } from 'react'
import style from './style'
import IconI from 'react-native-vector-icons/dist/AntDesign'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';
import { RootState } from "../../features/store"
interface IMapModal {
    visibleModal: boolean
    closeModal: () => void
}

export const MapModal: FC<IMapModal> = ({ visibleModal, closeModal }) => {
    const eventInfoAll = useSelector((state: RootState) => state.users.EventInfo);
    const { latitudeX, longitudeY } = eventInfoAll;
    const coordInitial = {
        latitude: latitudeX,
        longitude: longitudeY,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    };
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
                    <MapView
                        provider={PROVIDER_GOOGLE}
                        style={{ flex: 1 }}
                        initialRegion={coordInitial}>
                        <Marker
                            coordinate={{
                                latitude: latitudeX,
                                longitude: longitudeY,
                            }}
                            title="Etkinliğin Yapılacağı Mekan."
                        />
                    </MapView>
                </View>
            </View>
        </Modal>
    );
};
