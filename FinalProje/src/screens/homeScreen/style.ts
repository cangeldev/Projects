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
    }
})