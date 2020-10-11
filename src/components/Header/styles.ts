import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
    container: {
        width: "100%",
        height: 95,
        backgroundColor: '#871313',
        borderRadius: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,

        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        padding: 20,
        paddingTop: 25,
        paddingBottom: 0
    },
})

export default style;