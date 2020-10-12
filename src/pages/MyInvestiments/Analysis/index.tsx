import React from 'react';
import { View, Text } from 'react-native';
import Header from '../../../components/Header';

import style from './styles';

const Analysis: React.FC = () => {
  return (
      <View>
          <Header menu={true}/>

          <View style={{ margin: 35, marginBottom: 5, marginTop: 40 }}>
                <Text style={style.title}>Luminárias da Lu</Text>
            </View>
      </View>
  );
}

export default Analysis;