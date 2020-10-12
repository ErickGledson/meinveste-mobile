import { StyleSheet } from 'react-native'
import { ceil } from 'react-native-reanimated';

const style = StyleSheet.create({
    valueContainer: {
        width: 100,
        height: 25,
        backgroundColor: '#871313',
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 5,      
    },
    value: {
        fontFamily: 'Ubuntu_500Medium',
        color: 'white',
        fontSize: 15,
    },
    text: {
        fontFamily: 'Ubuntu_400Regular',
        color: '#484848',
        fontSize: 16,
        marginTop: 5
    }
})

export default style;