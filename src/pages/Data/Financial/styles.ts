import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
    container: {
        
    },
    title: {
        fontFamily: "Poppins_600SemiBold",
        fontSize: 23,
        color: "#032E4E",
        marginBottom: 10,
    },
    loginButton: {
        width: 180,
        height: 42,
        borderRadius: 18,
        backgroundColor: '#871313',
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-end",
        marginTop: 50,
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
    subtitle: {
        fontFamily: "Poppins_500Medium",
        fontSize: 20,
        color: "#032E4E",
        marginTop: 40,
        marginBottom: 20
    },
    getnet: {
        width: 180,
        height: 45,
        borderRadius: 5,
        backgroundColor: '#D7D9EC',
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
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
    fileUploader: {
        width: 180,
        height: 45,
        borderRadius: 5,
        backgroundColor: '#D7D9EC',
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 10,
        flexDirection: "row",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    fileUploaderText: {
        fontFamily: 'Ubuntu_400Regular',
        color: '#032E4E',
        fontSize: 16,
        marginRight: 5
    }
})

export default style;