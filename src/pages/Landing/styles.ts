import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
    container: {
        backgroundColor: '#871313',
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around"
    },
    welcomeText: {
        fontFamily: "Poppins_500Medium",
        fontSize: 26,
        color: "white",
    },
    loginButton: {
        width: 180,
        height: 42,
        borderRadius: 18,
        backgroundColor: '#22818E',
        alignItems: "center",
        justifyContent: "center",
        marginTop: -40
    },
    loginButtonText: {
        fontFamily: 'Ubuntu_400Regular',
        color: 'white',
        fontSize: 18
    },
    noAccount: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: -40
    },
    noAccountText: {
        fontFamily: 'Ubuntu_400Regular',
        color: 'white',
        marginRight: 10,
        fontSize: 16
    },
    altNoAccountText: {
        fontFamily: 'Ubuntu_500Medium',
        color: '#22818E',
        fontSize: 17,
        textDecorationLine: "underline",
    }
})

export default style;