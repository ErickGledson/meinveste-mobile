import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
    container: {
        width: 320,
        height: 50,
        backgroundColor: '#DFDFDF',
        alignItems: "center",
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignSelf: "center",

        marginTop: 30,
        borderRadius: 6
    },
    searchIcon: {
        width: 50,
        height: '100%',
        backgroundColor: '#871313',
        alignItems: "center",
        justifyContent: "center",
        marginRight: -10,
        
        borderTopRightRadius: 6,
        borderBottomRightRadius: 6
    },
    textInput: {
        fontFamily: 'Ubuntu_400Regular',
        color: 'gray',
        fontSize: 16,
        width: 200
    }
})

export default style;