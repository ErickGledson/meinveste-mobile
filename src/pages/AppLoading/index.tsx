import React from 'react';
import { Image, View } from 'react-native';

import logo from '../../assets/images/logo.png'

import style from './styles'

const AppLoading: React.FC = () => {
  return (
      <View style={style.container}>
          <Image source={logo}/>
      </View>
  );
}

export default AppLoading;