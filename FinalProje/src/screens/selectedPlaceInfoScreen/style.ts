import { StyleSheet } from "react-native"
import colors from "../../assets/colors/colors"
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: 15,
        paddingVertical: 15
    },
    title: {
        color: colors.headerButtonColor,
        fontSize:18,
    },
    innerContainer: {
        backgroundColor: colors.white,
        elevation: 3,
        padding: 10
    },
    address: {
        color: colors.black,
        fontSize:13
    },
    divider: {
        borderBottomColor: colors.dividerColor,
        borderBottomWidth: 1.5,
        marginVertical: 10
    },
    historyEventView:{
        backgroundColor: colors.white,
        elevation: 3,
        padding: 10,
        marginTop:25
    }
})