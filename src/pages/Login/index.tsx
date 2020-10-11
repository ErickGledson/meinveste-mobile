import React from 'react';
import { View } from 'react-native';
import { TextField } from '@material-ui/core'

import Header from '../../components/Header';

import style from './styles';

const Login: React.FC = () => {
  return (
    <View style={style.container}>
      <Header menu={false} />

      <TextField id="standard-basic" label="Standard" />
    </View>
  );
}

export default Login;