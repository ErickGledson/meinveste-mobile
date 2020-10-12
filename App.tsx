import { StatusBar } from 'expo-status-bar';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import React from 'react';

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  useFonts
} from '@expo-google-fonts/poppins';

import {
  Ubuntu_400Regular,
  Ubuntu_500Medium,
  Ubuntu_700Bold
} from '@expo-google-fonts/ubuntu';

import AppStack from './src/routes/AppStack';
import AppLoading from './src/pages/AppLoading';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1D6873',
    accent: '#f1c40f',
  },
};

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Ubuntu_400Regular,
    Ubuntu_500Medium,
    Ubuntu_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <PaperProvider theme={theme}>
        <AppStack />
        <StatusBar style="light" />
      </PaperProvider>
    );
  }
}
