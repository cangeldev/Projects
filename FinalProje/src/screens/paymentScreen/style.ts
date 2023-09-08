import { StyleSheet } from 'react-native'
import colors from '../../assets/colors/colors'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    cardContainer: {
        alignItems: 'center',
        marginVertical: 10,
        marginTop: 30
    },
    card: {
        width: "90%",
        height: 200
    },
    cardImage: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
        overflow: "hidden"
    },
    infoView: {
        flex: 1,
        flexDirection: "row",
        marginHorizontal: 20,
        paddingHorizontal: 10,
        borderRadius: 5,
        elevation: 2,
        backgroundColor: colors.white,
    },
    infoInnerView: {
        flex: 0.5,
        overflow: "hidden",
        justifyContent: "space-evenly",
        paddingVertical: 5
    },
    cvcText: {
        color: colors.black,
        position: "absolute",
        top: 98,
        right: 98,
        fontSize: 16,
        fontWeight: "bold"
    },
    name: {
        color: colors.white,
        position: "absolute",
        bottom: 15,
        paddingHorizontal: 25,
        maxWidth: 200
    },
    cardNo: {
        color: colors.white,
        position: "absolute",
        paddingHorizontal: 25,
        bottom: 60,
        fontWeight: "bold",
        fontSize: 18
    },
    validThruView: {
        flexDirection: "row",
        position: "absolute",
        top: 80,
        left: 250,
        alignItems: "center",
    },
    validThruTitle: {
        fontSize: 5,
        color: colors.white,
        marginRight: 2
    },
    validThru: {
        color: colors.white,
        fontSize: 12
    },
    vipText: {
        borderRadius: 6,
        backgroundColor: colors.white,
        elevation: 3,
        paddingHorizontal: 10,
        paddingVertical: 8,
        marginTop: 10,
        marginHorizontal: 20,
        color: colors.black,
        fontWeight: "600"
    },
    vipIconFalse: {
        fontSize: 22,
        position: "absolute",
        right: 28,
        top: 17
    },
    vipIconTrue: {
        fontSize: 22,
        position: "absolute",
        right: 28,
        top: 17,
        color: colors.red
    },
    buttonView: {
        marginHorizontal: 20
    }
})