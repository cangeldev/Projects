import { StyleSheet, Dimensions } from "react-native"
import colors from "../../assets/colors/colors"

const windowWidth = Dimensions.get('window').width

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
        width: windowWidth / 1.3
    },
    closeIcon: {
        fontSize: 24,
        color: colors.headerButtonColor,
        position: "absolute",
        right: 15,
        top: 20
    },
    listButtonText: {
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginBottom: 15,
        marginTop: 5,
        fontWeight: "700",
        borderRadius: 5,
        alignSelf: "center",
        backgroundColor: colors.headerButtonColor,
        color: colors.white
    }
})