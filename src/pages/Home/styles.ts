import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
    newProject: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: 70,
        height: 70,
        alignSelf: "flex-end",
        backgroundColor: '#67D0DE',
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        borderRadius: 100,

        zIndex: 1000
    },
})

export default style;