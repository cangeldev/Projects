import { View, Text } from 'react-native'
import React from 'react'
import { ImageSlider } from 'react-native-image-slider-banner'
import style from './style'

export const SlaytSlider = () => {

  return (
    <View style={style.container}>
      <ImageSlider
        data={[
          { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/VAN_CAT.png/800px-VAN_CAT.png' },
          { img: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg' },
          { img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg' }
        ]}
        autoPlay={false}
        onItemChanged={() => null}
        onClick={() => null}
        preview={false}
        indicatorContainerStyle={style.indicatorContainerStyle}
        activeIndicatorStyle={style.activeIndicatorStyle}
        caroselImageContainerStyle={style.caroselImageContainerStyle}
        caroselImageStyle={style.caroselImageStyle}
      />
      <View style={style.infoContainer}>
        <Text numberOfLines={1} style={style.infoText}>
          26 Ağustos - 28 Ekim
        </Text>
        <Text numberOfLines={1} style={style.infoTitle}>
          BKM Yaz Etkinlikleri Maximum Uniq
        </Text>
        <Text numberOfLines={1} style={style.infoText}>
          Çeşitli Mekanlar
        </Text>
      </View>
    </View>
  )
}
