import React from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'; 

import Header from '../../components/Header';

import style from './styles';
import { useNavigation } from '@react-navigation/native';

const Home: React.FC = () => {
  const { navigate } = useNavigation();

  function handleNavigateToNewProject(){
    navigate('NewProject')
  }

  return (
    <View style={{justifyContent: "center"}}>
      <Header menu={true}/>

      <RectButton style={style.newProject} onPress={handleNavigateToNewProject}>
        <Text style={style.newProjectText}>Novo Projeto</Text>
        <Ionicons name="ios-add" size={35} color="white" style={{marginBottom: 5}}/>
      </RectButton>
    </View>
  )
}

export default Home;