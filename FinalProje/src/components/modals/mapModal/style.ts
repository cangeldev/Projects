import { StyleSheet, Dimensions } from "react-native"
import colors from "../../../assets/colors/colors"

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(52, 52, 52, 0.7)'
    },
    innerContainer: {
        backgroundColor: colors.white,
        borderRadius: 3,
        width: windowWidth / 1.1,
        height: windowHeight / 1.2,
    },
    closeIcon: {
        fontSize: 24,
        color: colors.headerButtonColor,
        position: "absolute",
        right: 15,
        top: 10

    },
})