import { StyleSheet, Dimensions } from "react-native"
import colors from "../../../assets/colors/colors"
const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width
export default StyleSheet.create({
    container: {
        marginHorizontal: 15,
        marginVertical: 5,
        borderRadius: 10,
        overflow: "hidden",
        borderWidth: 0.1,
        borderColor: colors.white,
        elevation: 1.5,
        paddingBottom: 10
    },
    image: {
        backgroundColor: "yellow",
        width: windowWidth,
        height: windowHeight / 5.3

    },
    infoView: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 15,
        alignItems: "center"
    },
    infoInnerView: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 15
    },
    title: {
        marginVertical: 5,
        fontSize: 18,
        color: colors.black,
        fontWeight: "bold",
        width: windowWidth / 1.6,
    },
    price: {
        marginVertical: 5,
        fontSize: 15,
        color: colors.black,
        fontWeight: "bold"
    },
    adress: {
        color: colors.placeholderTextColor,
        width: windowWidth / 1.6,
    },
    button: {
        backgroundColor: colors.headerButtonColor,
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 7,
        color: colors.white,
        fontWeight: "bold"
    }
})