import React from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import Header from '../../components/Header';
import Input from '../../components/Input';

import style from './styles';

const Login: React.FC = () => {
  return (
    <View style={style.container}>
      <Header menu={false} />

      <View style={style.form}>
        <Input label='Email' type='emailAddress'/>
        <Input label='Senha' type='password'/>
      </View>

      <RectButton style={style.loginButton}>
        <Text style={style.loginButtonText}>Entrar</Text>
      </RectButton>
    </View>
  );
}

export default Login;