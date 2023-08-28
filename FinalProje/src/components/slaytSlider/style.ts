import { StyleSheet, Dimensions } from "react-native"
import colors from "../../assets/colors/colors"
const windowHeight = Dimensions.get('window').height

export default StyleSheet.create({
    container: {
        marginHorizontal: 15,
        overflow: 'hidden',
        borderRadius: 6
    },
    caroselImageContainerStyle: {
        height: windowHeight / 4.5
    },
    caroselImageStyle: {
        resizeMode: 'stretch',
        height: windowHeight / 4.5

    },
    infoContainer: {
        backgroundColor: 'rgba(52, 52, 52, 0.2)',
        position: "absolute",
        bottom: 0,
        paddingBottom: 5,
        width: "100%",
        paddingLeft: 12
    },
    infoText: {
        color: colors.white,
        fontWeight: "300"
    },
    infoTitle: {
        color: colors.white,
        fontWeight: "bold"
    }
})