import React from 'react';
import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AboutContent from '../../../components/AboutContent';

import illustration from '../../../assets/images/alt-illustration-about.png'

import style from './styles'


const AboutPage02: React.FC = () => {
  const { navigate } = useNavigation();

  function handleNavigateToNext() {
    navigate('Landing')
  }
  
  return (
    <View style={style.container}>
        <Image source={illustration} style={{alignSelf: "center"}}/>

        <AboutContent first={true} number="02." description="Construa um perfil para o seu negócio e consiga investidores"/>

    </View>
  );
}

export default AboutPage02;