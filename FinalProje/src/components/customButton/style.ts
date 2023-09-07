import { StyleSheet } from "react-native"
import colors from "../../assets/colors/colors"
export default StyleSheet.create({

    mapButton: {
        backgroundColor: colors.headerButtonColor,
        borderRadius: 25,
        padding: 7,
        paddingHorizontal: 20,
        alignSelf: "center",
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    mapButtonText: {
        fontSize: 16,

        color: colors.white
    },
    mapIcon: {
        fontSize: 20,
        color: colors.white,
        marginRight:10
    },

})