import React from 'react';
import { View, Text } from 'react-native';
import Container from '../../components/Container';
import Header from '../../components/Header';

// import { Container } from './styles';

const Finished: React.FC = () => {
  return (
    <View style={{ justifyContent: "center" }}>
      <Header menu={true} />

      <Container
        textOne='Parabéns! Seu projeto já está em análise.'
        textTwo='Enquanto isso podemos começar a montar o seu perfil'
        final={true}
      />
    </View>
  )
}

export default Finished;