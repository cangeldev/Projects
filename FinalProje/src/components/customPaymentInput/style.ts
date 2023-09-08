import { StyleSheet } from 'react-native'
import colors from '../../assets/colors/colors'

export default StyleSheet.create({
    container: {
        marginHorizontal: 15,
        marginVertical: 7
    },
    title: {
        fontWeight: "bold",
        color: colors.black,
        marginHorizontal: 5,
        marginBottom: 5
    },
    txtInput: {
        borderRadius: 6,
        backgroundColor: colors.white,
        elevation: 3,
        paddingHorizontal: 10,
        paddingVertical: 8
    }
})