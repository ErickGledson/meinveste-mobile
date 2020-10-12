import React from 'react';
import { View, Text, Platform } from 'react-native';
import Input from '../../../components/Input';

import style from './styles'
import Header from '../../../components/Header';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const CompanyAbout: React.FC = () => {
    const { navigate } = useNavigation();

    function handleNavigateToFinished(){
        navigate('Finished')
    }

    return (
        <View style={style.container}>
            <ScrollView>
                <Header menu={true} />

                <View style={{ padding: 20 }}>
                    <Text style={style.title}>Conte um pouco mais do seu Negócio</Text>

                    <Input type='none' label='Segmento de Mercado'></Input>
                    <Input type='none' label='Data de Abertura'></Input>
                    <Input type='none' label='Descrição breve de atividades'></Input>

                    <Input type='none' label='Seu negócio gera algum impacto na sociedade?'></Input>


                    <RectButton style={style.loginButton} onPress={handleNavigateToFinished}>
                        <Text style={[style.loginButtonText]}>Próximo</Text>
                    </RectButton>
                </View>
            </ScrollView>

        </View>
    );
}

export default CompanyAbout;