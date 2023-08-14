import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1
    },
    title: {
        fontSize: 25,
        color: "#6a005b",
        alignSelf: "center",
        marginBottom: 20
    },
    productsListView: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 4,
        marginHorizontal: 20
    },
    products: {
        fontSize: 20
    },
    highPriceStyle: {
        color: "red"
    }
})