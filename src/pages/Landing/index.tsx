import React from 'react';
import { Image, View, Text } from 'react-native';

import style from './styles';

import illustration from '../../assets/images/illustration-landing.png';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Landing: React.FC = () => {
  const { navigate } = useNavigation();

  function handleNavigateToNext() {
    navigate('Login')
  }

  return (
    <View style={style.container}>
      <Image source={illustration} style={{marginTop: 40}}/>

      <Text style={style.welcomeText}>BEM-VINDO</Text>

      <RectButton style={style.loginButton} onPress={handleNavigateToNext}>
        <Text style={style.loginButtonText}>Entrar</Text>
      </RectButton>

      <View style={style.noAccount}>
        <Text style={style.noAccountText}>Não tem uma conta?</Text>
        <Text style={style.altNoAccountText}>Cadastre-se</Text>
      </View>

    </View>
  );
}

export default Landing;