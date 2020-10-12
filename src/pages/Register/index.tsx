import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import React from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import Header from '../../components/Header';
import Input from '../../components/Input';

import style from './styles';
import { TextInput, useTheme } from 'react-native-paper';

const Register: React.FC = (props) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');

  const { colors } = useTheme();

  const { navigate } = useNavigation();

  async function SubmitForm() {
    try {
      const response = await api.post('api/user', {
        user: {
          email,
          password,
          name
        }
        
      })
      navigate('Login')
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
          value={name}
          onChangeText={text => setName(text)}
          style={{ backgroundColor: colors.text + "00", marginBottom: 20 }}
          textContentType='name'
          label='Nome Completo'
        />

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
        <Text style={style.loginButtonText}>Cadastrar</Text>
      </RectButton>

    </View>
  );
}

export default Register;