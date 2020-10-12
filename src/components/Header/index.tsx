import React from 'react';
import { Image, Text, View } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

import style from './styles';

import logo from '../../assets/icons/mini-logo.png'
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
    menu: boolean
}

const Header: React.FC<HeaderProps> = ({ menu }, props) => {
    const navigation = useNavigation();

    if (menu) {
        return (
            <View style={style.container}>
                <BorderlessButton onPress={() => navigation.goBack()} style={{height: '100%'}}>
                    <Ionicons name="ios-arrow-back" size={35} color="white" />
                </BorderlessButton>


                <Image source={logo} />

                <Feather name="align-right" size={24} color="white" />
            </View>
        )
    }
    return (
        <View style={style.container}>
            <BorderlessButton onPress={() => navigation.goBack()}>
                    <Ionicons name="ios-arrow-back" size={35} color="white" />
            </BorderlessButton>

            <Image source={logo} style={{ marginLeft: 10 }} />

            <Feather name="align-right" size={24} color="transparent" />
        </View>
    )
}

export default Header;