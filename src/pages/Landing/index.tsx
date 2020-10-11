import React from 'react';
import { Image, View, Text } from 'react-native';

import style from './styles';

import illustration from '../../assets/images/illustration-landing.png';
import Button from '../../components/Button';
import { BorderlessButton } from 'react-native-gesture-handler';

const Landing: React.FC = () => {
  return (
    <View style={style.container}>
      <Image source={illustration} />

      <Text style={style.welcomeText}>BEM-VINDO</Text>

      <BorderlessButton>
        <Button text='Entrar' color="#1D6873"/>
      </BorderlessButton>


    </View>
  );
}

export default Landing;