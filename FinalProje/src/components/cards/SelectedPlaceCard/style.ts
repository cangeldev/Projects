import { StyleSheet } from "react-native"
import colors from "../../../assets/colors/colors"
export default StyleSheet.create({

    container: {
        marginBottom: 1,
        paddingVertical: 5,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    titleText: {
        color: colors.black,
        fontWeight: "600",
        fontSize: 16
    },
    dateText: {
        fontSize: 12,
    },
    priceText: {
        fontSize: 13,
        alignSelf: "center",
        color: colors.headerButtonColor
    }
})