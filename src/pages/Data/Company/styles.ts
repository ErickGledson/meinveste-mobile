import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
    container: {
        
    },
    title: {
        fontFamily: "Poppins_600SemiBold",
        fontSize: 23,
        color: "#032E4E",
    },
    loginButton: {
        width: 180,
        height: 42,
        borderRadius: 18,
        backgroundColor: '#871313',
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-end",
        marginTop: 30,
        marginBottom: 30,

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