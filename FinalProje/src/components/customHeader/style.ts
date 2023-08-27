import { StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";
export default StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        height: 250,
        paddingVertical: 15
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: "bold",
        alignSelf: "center",
        color: colors.black
    },
    divider: {
        borderBottomColor:"#EFEFEF",
        borderBottomWidth: 1.5,
        marginVertical: 10
    },
    txtInput: {
        backgroundColor: "#f1f2f4",
        marginHorizontal: 20,
        borderRadius: 5
    },
    buttonText: {
        borderWidth: 2,
        padding: 5,
        borderRadius: 5,
        paddingHorizontal: 7,
        fontWeight: "600",
        borderColor: "#4A6695",
        color: "#4A6695"
    },
    filterView: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 8,
        paddingHorizontal: 20,
        alignItems: "center"
    }
})