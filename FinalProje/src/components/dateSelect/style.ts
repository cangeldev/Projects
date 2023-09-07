import { StyleSheet, Dimensions } from "react-native"
import colors from "../../assets/colors/colors"

const windowWidth = Dimensions.get('window').width

export default StyleSheet.create({
    selectDateView: {
        backgroundColor: colors.white,
        elevation: 2,
        borderRadius: 10,
        alignSelf: "center",
        padding: 10,
        marginTop: 10,
        width: windowWidth / 2,
        alignItems: "center"
    },
    innerDateView: {
        flexDirection: "row",
        alignItems: "center",
    },
    dateTxt: {
        fontSize: 12
    },
    day: {
        fontSize: 50,
        marginRight: 5,
        color: colors.black,
        fontWeight: "700"
    },
    dateIcon: {
        marginLeft: 5,
        color: colors.black
    }
})