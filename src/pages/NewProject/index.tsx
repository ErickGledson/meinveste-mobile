import React from 'react';
import { View, Text } from 'react-native';
import Container from '../../components/Container';
import Header from '../../components/Header';

// import { Container } from './styles';

const NewProject: React.FC = () => {
  return (
    <View style={{ justifyContent: "center" }}>
      <Header menu={true} />

      <Container
        textOne='Pronto para criar um projeto de financiamento para o seu negócio?'
        textTwo='Tenha em mãos seus documentos e os da sua empresa.'
        final={false}
      />
    </View>
  )
}

export default NewProject;