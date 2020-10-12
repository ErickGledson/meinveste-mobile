import React from 'react';
import { View, Text } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import Header from '../../components/Header';

import style from './styles';
import { useNavigation } from '@react-navigation/native';
import SearchInput from '../../components/SearchInput';

const Home: React.FC = () => {
  const { navigate } = useNavigation();

  function handleNavigateToNewProject() {
    navigate('NewProject')
  }

  return (
    <View style={{ justifyContent: "center", flex: 1}}>
      <ScrollView>
        <Header menu={true} />

        <SearchInput/>
      </ScrollView>

      <RectButton style={style.newProject} onPress={handleNavigateToNewProject}>
        <Ionicons name="ios-add" size={50} color="white" />
      </RectButton>
    </View>
  )
}

export default Home;