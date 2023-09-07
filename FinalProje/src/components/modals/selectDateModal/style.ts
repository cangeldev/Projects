import { StyleSheet, Dimensions } from "react-native"
import colors from "../../../assets/colors/colors"

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(52, 52, 52, 0.7)',
        paddingTop:60
    },
    innerContainer: {
        backgroundColor: colors.white,
        borderRadius: 5,
        width: windowWidth / 1.4,
        height: windowHeight / 2.2,
        justifyContent:"center"
    },
    closeIcon: {
        fontSize: 24,
        color: colors.headerButtonColor,
        position: "absolute",
        right: 8,
        top: -22
    },
    title: {
        fontSize: 18,
        color: colors.black,
        fontWeight: "bold",
        marginVertical: 10,
        paddingHorizontal: 15
    } 
})