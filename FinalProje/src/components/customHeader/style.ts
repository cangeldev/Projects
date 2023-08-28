import { StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";
export default StyleSheet.create({
    container: {
        paddingTop: 5,
    },
    headerView: {
        justifyContent: "center",
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: "bold",
        alignSelf: "center",
        color: colors.black
    },
    divider: {
        borderBottomColor: colors.dividerColor,
        borderBottomWidth: 1.5,
        marginVertical: 10
    },
    txtInputView: {
        justifyContent: "center",
        marginTop: 2
    },
    txtInput: {
        backgroundColor: colors.txtInputBackGround,
        marginHorizontal: 20,
        borderRadius: 7,
        paddingHorizontal: 35,
        fontSize: 16
    },
    buttonText: {
        borderWidth: 2.5,
        padding: 5,
        borderRadius: 5,
        paddingHorizontal: 8,
        fontWeight: "600",
        borderColor: colors.headerButtonColor,
        color: colors.headerButtonColor,
        textAlign: "center",
        textAlignVertical: "center"
    },
    filterView: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 8,
        paddingHorizontal: 20,
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
    logoutIcon: {
        fontSize: 20,
        position: "absolute",
        right: 15,
        color: colors.black
    },
    activityCountText: {
        color: colors.black,
        fontSize:16
    }
})