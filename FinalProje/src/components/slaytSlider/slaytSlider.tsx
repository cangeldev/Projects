import { View } from 'react-native'
import React from 'react'
import { ImageSlider } from 'react-native-image-slider-banner'
import style from './style'
import { PopularEvents } from '../../utils/helper'

export const SlaytSlider = () => {

  return (
    <View>
      <ImageSlider
        localImg
        data={PopularEvents}
        autoPlay={true}
        onItemChanged={() => null}
        onClick={() => null}
        preview={false}
        indicatorContainerStyle={style.indicatorContainerStyle}
        activeIndicatorStyle={style.activeIndicatorStyle}
        caroselImageStyle={style.caroselImageHomeScreenStyle}
        showIndicator={true}
      />
    </View>
  )
}
