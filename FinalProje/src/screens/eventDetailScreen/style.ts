import { StyleSheet, Dimensions } from "react-native"
import colors from "../../assets/colors/colors"

const windowHeight = Dimensions.get('window').height

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    Icon: {
        position: "absolute",
        top: 44,
        fontSize: 22,
        color: colors.white,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        padding: 4,
        borderRadius: 4
    },
    infoView: {
        paddingHorizontal: 15,
        paddingVertical: 5
    },
    title: {
        color: colors.black,
        fontSize: 20,
        fontWeight: "800"
    },
    infoInnerView: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10
    },
    infoIcon: {
        fontSize: 20,
        color: colors.black,
    },
    infoText: {
        color: colors.black,
        fontSize: 13,
        marginLeft: 4,
        marginHorizontal: 15
    },
    divider: {
        borderBottomColor: colors.dividerColor,
        borderBottomWidth: 1.5,
        marginVertical: 10
    },
    eventInfoView: {
        paddingHorizontal: 15,
    },
    eventInfoTitle: {
        fontSize: 20,
        color: colors.black,
        fontWeight: "700"
    },
    eventInfoText: {
        color: colors.black,
    },
    mapButton: {
        backgroundColor: colors.headerButtonColor,
        borderRadius: 25,
        padding: 5,
        paddingHorizontal: 20,
        alignSelf: "center",
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    mapButtonText: {
        marginLeft: 10,
        fontSize: 16,
        color: colors.white
    },
    mapIcon: {
        fontSize: 20,
        color: colors.white,
    },
    mapView: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    paddingView: {
        paddingBottom: 60
    },
    imageView: {
        width: "100%",
        height: windowHeight / 2.3
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "stretch"
    },
    buttonView: {
        marginHorizontal: "23%"
    },
    customButtonView: {
        position: "absolute",
        bottom: 10,
        alignSelf: "center",
        width: "85%"
    }
})