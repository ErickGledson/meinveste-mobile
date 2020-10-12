import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
    container: {
        backgroundColor: '#22818E',
        borderRadius: 6
    },
    title: {
        fontFamily: "Poppins_600SemiBold",
        fontSize: 23,
        color: "#032E4E",
        marginBottom: 10,
    },
    item: {
        borderBottomColor: '#1C6C77',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-around",
    },
    companyTitle: {
        fontFamily: "Poppins_500Medium",
        fontSize: 23,
        color: "white",
        marginBottom: 20,
        marginTop: 20
    }
})

export default style;