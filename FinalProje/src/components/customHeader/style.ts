import { StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";
export default StyleSheet.create({

    container: {
        paddingTop: 5,
    },
    txtInputView: {
        justifyContent: "center",
        marginTop: 10
    },
    searchIcon: {
        fontSize: 23,
        position: "absolute",
        left: 25,
        color: colors.txtInputIconColor
    },
    sortIcon: {
        fontSize: 23,
        position: "absolute",
        right: 26,
        color: colors.txtInputIconColor
    },

})