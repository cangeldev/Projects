import React, { useState, useRef } from 'react'
import { View, Text, TouchableOpacity, StatusBar, ImageBackground, Alert } from 'react-native'
import * as Animatable from 'react-native-animatable'
import style from './style'
import { CustomButton, CustomPaymentInput, CustomTextView } from '../../components'
import { useSelector } from "react-redux"
import colors from '../../assets/colors/colors'
import { CardBack, CardFront } from '../../assets'
import { RootState } from '../../features/store'
import IconF from 'react-native-vector-icons/Fontisto'

export const PaymentScreen = () => {
    const [isFront, setIsFront] = useState(true)
    const [name, setName] = useState("")
    const [cardNumber, setcardNumber] = useState("")
    const [cvcNo, setCvcNo] = useState("")
    const [validThruNo, setValidThruNo] = useState("")
    const flipRef = useRef(null)
    const { place, eventStart, vip, title, price } = useSelector((state: RootState) => state.users.EventInfo)
    const [vipSeat, SetVip] = useState(false)

    const formatDate = (dateString: any) => {
        const date = new Date(dateString)
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' }
        return date.toLocaleDateString('tr-TR', options)
    }
    const toggleCard = () => {
        setIsFront(!isFront)
        if (flipRef.current) {
            flipRef.current.flipInY(700)
        }
    };
    const handleNameChange = (inputText: string) => {
        setName(inputText);
        setIsFront(true)
    };
    const handleCardNoChange = (inputText: string) => {
        setIsFront(true)
        if (/^\d*$/.test(inputText)) {
            const formattedNumber = inputText.replace(/\d{4}(?=\d)/g, '$& ');
            setcardNumber(formattedNumber);
        }
    };
    const handleCvcNoChange = (inputText: string) => {
        setCvcNo(inputText);
        setIsFront(false)
    };
    const handleValidThruNoChange = (inputText: string) => {
        setIsFront(true)
        if (/^\d*$/.test(inputText)) {
            const formattedNumber = inputText.replace(/\d{2}(?=\d)/g, '$&/');
            setValidThruNo(formattedNumber);
        }
    };
    return (
        <View style={style.container}>
            <StatusBar barStyle={"dark-content"}
                backgroundColor={colors.white}
            />
            <TouchableOpacity
                style={style.cardContainer}
                onPress={toggleCard}>
                <Animatable.View
                    ref={flipRef}
                    style={style.card}
                    animation="flipInY"
                    duration={500}
                    useNativeDriver
                >
                    {isFront ? (
                        <ImageBackground
                            source={CardFront}
                            style={style.cardImage}>
                            <Text style={style.cardNo}>
                                {cardNumber}
                            </Text>
                            <Text numberOfLines={1} style={style.name}>
                                {name}
                            </Text>
                            <View style={style.validThruView}>
                                <Text style={style.validThruTitle}>
                                    VALID {"\n"}THRU
                                </Text>
                                <Text style={style.validThru}>
                                    {validThruNo}
                                </Text>
                            </View>
                        </ImageBackground>
                    ) : (
                        <ImageBackground
                            source={CardBack}
                            style={style.cardImage}>
                            <Text style={style.cvcText}>
                                {cvcNo}
                            </Text>
                        </ImageBackground>
                    )}
                </Animatable.View>
            </TouchableOpacity>
            <View style={style.infoView}>
                <View style={style.infoInnerView}>
                    <CustomTextView
                        title='Etkinlik'
                        text={title}
                    />
                    <CustomTextView
                        title='Etkinlik Tarihi'
                        text={formatDate(eventStart)}
                    />
                </View>
                <View style={[style.infoInnerView, { paddingLeft: 20 }]}>
                    <CustomTextView
                        title='Mekan'
                        text={place}
                    />
                    <CustomTextView
                        title='Fiyatı'
                        // text={price}
                        text={vip != undefined && vipSeat == true ? vip : price}

                    />
                </View>
            </View>
            {
                vip == undefined ? null :
                    <View>
                        <Text style={style.vipText}>
                            Vip bilet isterseniz seçebilirsiniz (Ekstra 100 TL)
                        </Text>
                        <IconF
                            onPress={() => SetVip(!vipSeat)}
                            name={vipSeat == false ? "checkbox-passive" : "checkbox-active"}
                            style={vipSeat == false ? style.vipIconFalse : style.vipIconTrue}
                        />
                    </View>
            }
            <CustomPaymentInput
                changeText={handleNameChange}
                title='Adı Soyadı'
                placeHolder='John Doe'
            />
            <CustomPaymentInput
                changeText={handleValidThruNoChange}
                keyboardType='numeric'
                maxlength={4}
                title='Geçerlilik Tarihi'
                placeHolder='07/24'
            />
            <CustomPaymentInput
                changeText={handleCardNoChange}
                keyboardType='number-pad'
                maxlength={16}
                title='Kart numarası'
                placeHolder=' ·  ·  ·  ·   ·  ·  ·  ·    ·  ·  ·  ·    ·  ·  ·  · '
            />
            <CustomPaymentInput
                changeText={handleCvcNoChange}
                keyboardType='number-pad'
                maxlength={3}
                title='CVC'
                placeHolder='***'
            />
            <CustomButton
                title='Onayla'
                onClick={() => {
                    Alert.alert('Ödeme İşleminiz Başarılı', 'İyi yolculuklar Dileriz.', [
                        { text: 'Bitir', onPress: () => null },
                    ]);
                }}
            />
        </View >
    );
};

