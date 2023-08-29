import { StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";
export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(52, 52, 52, 0.7)'
    },
    innerContainer: {
        backgroundColor: "white",
        borderRadius: 3,
        width: 300,
        height: 550,
        padding: 15
    },
    titleText: {
        fontSize: 17,
        fontWeight: "700",
        color: colors.black
    },
    closeText: {
        fontSize: 16,
        color: colors.red
    }

})