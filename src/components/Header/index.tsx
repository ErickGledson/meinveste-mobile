import React from 'react';
import { Image, Text, View } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

import style from './styles';

import logo from '../../assets/icons/mini-logo.png'

interface HeaderProps {
    menu: boolean
}

const Header: React.FC<HeaderProps> = ({ menu }, props) => {
    if (menu) {
        return (
            <View style={style.container}>
                <Ionicons name="ios-arrow-back" size={30} color="white" />

                <Image source={logo}/>

                <Feather name="align-right" size={24} color="white" />
            </View>
        )
    }
    return (
        <View style={style.container}>
            <Ionicons name="ios-arrow-back" size={30} color="white" />

            <Image source={logo} style={{marginLeft: 10}} />

            <Feather name="align-right" size={24} color="transparent" />
        </View>
    )
}

export default Header;