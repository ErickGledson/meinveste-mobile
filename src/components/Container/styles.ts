import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
    container: {
        backgroundColor: '#22818E',
        width: '90%',
        height: 710,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 6,
        padding: 20,
        paddingLeft: 30,
        marginTop: 20
    },
    containerText: {
        fontFamily: "Poppins_500Medium",
        fontSize: 26,
        marginBottom: 15,
        color: "white",
    },
    loginButton: {
        width: 180,
        height: 42,
        borderRadius: 18,
        backgroundColor: '#871313',
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 15,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    loginButtonText: {
        fontFamily: 'Ubuntu_400Regular',
        color: 'white',
        fontSize: 18
    },
})

export default style;