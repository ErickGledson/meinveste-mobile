import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
    title: {
        fontFamily: 'Ubuntu_500Medium',
        color: '#084750',
        fontSize: 30
    },
    localText: {
        fontFamily: 'Ubuntu_400Regular',
        color: '#032E4E',
        marginLeft: 5,

        fontSize: 18
    },
    invest: {
        width: 200,
        height: 45,
        borderRadius: 5,
        backgroundColor: '#500808',
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 30,
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
    investText: {
        fontFamily: 'Ubuntu_500Medium',
        color: 'white',
        fontSize: 18,
        marginRight: 5
    },
    subtitle: {
        fontFamily: 'Ubuntu_500Medium',
        color: '#4E1003',
        fontSize: 26,
        marginTop: 60,
        borderBottomColor: '#D3D3D3',
        borderBottomWidth: 1,
        paddingBottom: 5
    },
    description: {
        fontFamily: 'Ubuntu_400Regular',
        color: '#484848',
        fontSize: 18,
        marginTop: 20
    },
    investSectionText: {
        fontFamily: 'Ubuntu_400Regular',
        color: '#4E1003',
        fontSize: 16,
        marginTop: 20
    },
    investSectionInfo: {
        fontFamily: 'Ubuntu_500Medium',
        color: '#084750',
        fontSize: 18,
        marginTop: 20
    },
    linkText: {
        fontFamily: 'Ubuntu_400Regular',
        color: '#22818E',
        fontSize: 17,
        textDecorationLine: 'underline'
    }
})

export default style;