import React from 'react';
import { View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

import style from './styles';
import { RectButton } from 'react-native-gesture-handler';

const SearchInput: React.FC = () => {
    const [value, onChangeText] = React.useState('');
    return (
        <View style={style.container}>
            <Feather name="map-pin" size={24} color="#871313" />
            <TextInput
                style={style.textInput}
                onChangeText={text => onChangeText(text)}
                value={value}
                placeholder='Procure por negócios locais'
            />
            <RectButton>
                <View style={style.searchIcon}>
                    <Feather name="search" size={24} color="white" />
                </View>
            </RectButton>

        </View>
    );
}

export default SearchInput;