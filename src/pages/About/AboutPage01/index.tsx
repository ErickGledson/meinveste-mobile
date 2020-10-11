import React from 'react';
import { View, Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import style from './styles'

import illustration from '../../../assets/images/illustration-about.png'
import AboutContent from '../../../components/AboutContent';

import goNext from '../../../assets/icons/go-next.png'

const AboutPage01: React.FC = () => {
  const { navigate } = useNavigation();

  function handleNavigateToNext() {
    navigate('Alt-AboutPage')
  }

  return (
    <View style={style.container}>
      <Image source={illustration} style={{ alignSelf: "center" }} />

      <AboutContent first={true} number="01." description="Faça investimentos e apoie Pequenos Negócios">
        <BorderlessButton onPress={handleNavigateToNext} style={style.bordelessButton}>
          <Image source={goNext} />
        </BorderlessButton>
      </AboutContent>
    </View>
  );
}

export default AboutPage01;