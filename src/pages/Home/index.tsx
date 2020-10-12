import React from 'react';
import { View, Text, Image } from 'react-native';
import { BorderlessButton, RectButton, ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';
import SearchInput from '../../components/SearchInput';

import commerce from '../../assets/images/commerce.png'
import bakery from '../../assets/images/bakery.png'

import style from './styles';

const Home: React.FC = () => {
  const { navigate } = useNavigation();

  function handleNavigateToNewProject() {
    navigate('NewProject')
  }

  function handleNavigateToCompanyProfile() {
    navigate('CompanyProfile')
  }

  return (
    <View style={{ justifyContent: "center", flex: 1}}>
      <ScrollView style={{ flex: 1}}>
        <Header menu={true} />

        <SearchInput/>

        <BorderlessButton style={{alignSelf: "center", marginTop: 40}} onPress={handleNavigateToCompanyProfile}>
          <Image source={commerce}/>
        </BorderlessButton>

        <BorderlessButton style={{alignSelf: "center", marginTop: 20}}>
          <Image source={bakery}/>
        </BorderlessButton>
      </ScrollView>

      <RectButton style={style.newProject} onPress={handleNavigateToNewProject}>
        <Ionicons name="ios-add" size={50} color="white" />
      </RectButton>
    </View>
  )
}

export default Home;