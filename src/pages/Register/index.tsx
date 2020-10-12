import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import Header from '../../components/Header';
import Input from '../../components/Input';

import style from './styles';

const Register: React.FC = () => {
  const {navigate} = useNavigation();
  function handleNavigateToNext(){
    navigate('Home')
  }
  return (
    <View style={style.container}>
      <Header menu={false} />

      <View style={style.form}>
        <Input label='Nome Completo' type='password'/>
        <Input label='Seu email' type='emailAddress'/>
        <Input label='Senha' type='password'/>
      </View>

      <RectButton style={style.loginButton} onPress={handleNavigateToNext}>
        <Text style={style.loginButtonText}>Cadastrar</Text>
      </RectButton>

    </View>
  );
}

export default Register;