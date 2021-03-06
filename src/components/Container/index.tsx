import React from 'react';
import { View, Text, Image } from 'react-native';

import style from './styles';

import finalIllustration from '../../assets/images/final-illustration.png'
import illustration from '../../assets/images/illustration-newProject.png'
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


interface ContainerProps {
    textOne: string
    final: boolean
    textTwo: string

}

const Container: React.FC<ContainerProps> = ({ textOne, final, textTwo }) => {
    const { navigate } = useNavigation();
    
    function handleNavigateToData() {
        navigate('CompanyOwner')
    }

    if (final) {
        return (
            <View style={style.container}>
                <Text style={style.containerText}>{textOne}</Text>
                <Image source={finalIllustration} style={{marginBottom: 30}} />
                <Text style={style.containerText}>{textTwo}</Text>

                <RectButton style={style.loginButton} onPress={handleNavigateToData}>
                    <Text style={[style.loginButtonText]}>Começar</Text>
                </RectButton>
            </View>
        );
    }
    return (
        <View style={style.container}>
            <Text style={style.containerText}>{textOne}</Text>
            <Image source={illustration} style={{marginBottom: 30}} />
            <Text style={style.containerText}>{textTwo}</Text>


            <RectButton style={style.loginButton} onPress={handleNavigateToData}>
                <Text style={style.loginButtonText}>Começar</Text>
            </RectButton>
        </View>
    );
}

export default Container;