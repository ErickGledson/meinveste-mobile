import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { TextInput, useTheme } from 'react-native-paper';

import Header from '../../components/Header';
import api from '../../services/api';

import style from './styles';

const Login: React.FC = (props) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { colors } = useTheme();

  const { navigate } = useNavigation();

  async function SubmitForm() {
    try {
      const response = await api.post('api/user/login', {
        email,
        password,
      })

      await AsyncStorage.setItem(
        'id', response.data.id
      );
      await AsyncStorage.setItem(
        'email', response.data.email
      );
      await AsyncStorage.setItem(
        'name', response.data.name
      );

      navigate('Home')
    } catch (error) {
      console.log(error.response.status)
    }
  }

  return (
    <View style={style.container}>
      <Header menu={false} />

      <View style={style.form}>
        <TextInput
          {...props}
          value={email}
          onChangeText={text => setEmail(text)}
          style={{ backgroundColor: colors.text + "00", marginBottom: 20 }}
          textContentType='emailAddress'
          label='Seu email'
        />

        <TextInput
          {...props}
          value={password}
          onChangeText={text => setPassword(text)}
          style={{ backgroundColor: colors.text + "00", marginBottom: 20 }}
          textContentType='password'
          label='Senha'
          secureTextEntry={true}
        />
      </View>

      <RectButton style={style.loginButton} onPress={SubmitForm}>
        <Text style={style.loginButtonText}>Entrar</Text>
      </RectButton>

    </View>
  );
}

export default Login;