import React from 'react';
import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';

import AboutContent from '../../../components/AboutContent';

import illustration from '../../../assets/images/alt-illustration-about.png'
import goNext from '../../../assets/icons/go-next.png'

import style from './styles'

const AboutPage02: React.FC = () => {
  const { navigate } = useNavigation();

  function handleNavigateToNext() {
    navigate('Landing')
  }

  return (
    <View style={style.container}>
      <Image source={illustration} style={{ alignSelf: "center", marginTop: 60, marginBottom: 85}}/>

      <AboutContent first={false} number="02." description="Construa um perfil para o seu negócio e consiga investidores">
        <BorderlessButton onPress={handleNavigateToNext} style={style.bordelessButton}>
          <Image source={goNext}/>
        </BorderlessButton>
      </AboutContent>

    </View>
  );
}

export default AboutPage02;