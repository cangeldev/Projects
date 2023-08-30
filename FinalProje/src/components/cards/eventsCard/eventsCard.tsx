import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import style from './style'
import { Muze } from '../../../assets'
import { useNavigation } from '@react-navigation/native'

export const EventsCard = () => {

    const navigation = useNavigation<any>()

    return (
        <Pressable onPress={() => navigation.navigate("EventDetailScreen")}>
            <View style={style.container}>
                <View style={style.imageView}>
                    <Image
                        source={Muze}
                        style={style.image}
                    />
                </View>
                <View style={style.infoView}>
                    <Text numberOfLines={1} style={style.title}>
                        Konuralp Müzesi
                    </Text>
                    <Text style={style.price}>
                        650,00 TL
                    </Text>
                </View>
                <View style={style.infoInnerView}>
                    <Text numberOfLines={2} style={style.adress}>
                        Alemdar Caddesi, Hacı Ahmet Sokak Düzce
                    </Text>
                    <Pressable>
                        <Text style={style.button}>
                            SATIN AL
                        </Text>
                    </Pressable>
                </View>
            </View>
        </Pressable>
    )
}
