import { StyleSheet } from "react-native"
import colors from "../../assets/colors/colors"
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    title: {
        marginHorizontal: 15,
        fontWeight: "bold",
        color: "black",
        fontSize: 25
    },
    sliderView:
    {
        marginHorizontal: 26,
        overflow: 'hidden',
        borderRadius: 6,
        marginBottom: 5,
    },
    filterView: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 8,
        paddingHorizontal: 20,
        alignItems: "center"
    },
    activityCountText: {
        color: colors.black,
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
    buttonFilterText:{
        borderWidth: 2.5,
        borderColor:colors.headerButtonColor,
        padding: 5,
        borderRadius: 5,
        paddingHorizontal: 5,
        fontWeight: "600",
        backgroundColor: colors.headerButtonColor,
        color: colors.white,
        textAlign: "center",
        textAlignVertical: "center",
        marginLeft:-10,
        marginRight:10
    },
    historyButton: {
        borderWidth: 2.5,
        padding: 5,
        borderRadius: 5,
        paddingHorizontal: 8,      
        borderColor: colors.headerButtonColor,
        color: colors.headerButtonColor,
        textAlign: "center",
        textAlignVertical: "center",
        fontSize:18,
        marginRight:10,
    },
})