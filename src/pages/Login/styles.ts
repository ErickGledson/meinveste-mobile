import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
    container: {
        justifyContent: "center"
    },
    input: {
        height: 40, 
        borderBottomColor: '#959595', 
        borderBottomWidth: 1,
        margin: 40
    },
    focusedInput: {
        height: 40, 
        margin: 40
    },
    form: {
        marginTop: '50%',
        margin: 40,
        marginBottom: 0
    },
    loginButton: {
        width: 180,
        height: 42,
        borderRadius: 18,
        backgroundColor: '#22818E',
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 100,

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