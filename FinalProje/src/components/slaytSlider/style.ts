import { StyleSheet, Dimensions } from "react-native"
import colors from "../../assets/colors/colors"
const windowHeight = Dimensions.get('window').height

export default StyleSheet.create({
    caroselImageHomeScreenStyle: {
        resizeMode: 'stretch',
        height: windowHeight / 4.7,
    },
    indicatorContainerStyle: {
        bottom: -20
    },
    activeIndicatorStyle: {
        backgroundColor: colors.headerButtonColor
    }
})