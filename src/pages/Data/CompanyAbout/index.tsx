import React from 'react';
import { View, Text, Platform } from 'react-native';
import Input from '../../../components/Input';

import style from './styles'
import Header from '../../../components/Header';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import SegmentPicker from '../../../components/SegmentPicker';

const CompanyAbout: React.FC = () => {
    const { navigate } = useNavigation();

    function handleNavigateToFinancial(){
        navigate('Financial')
    }

    return (
        <View style={style.container}>
            <ScrollView>
                <Header menu={true} />

                <View style={{ padding: 20 }}>
                    <Text style={style.title}>Conte um pouco mais do seu Negócio</Text>

                    <SegmentPicker/>
                    <Input type='none' label='Data de Abertura'></Input>
                    <Input type='none' label='Descrição breve de atividades'></Input>


                    <Text style={style.subtitle}>Seu negócio gera algum impacto na sociedade?</Text>
                    <Input type='none' label='Impacto do seu negócio'></Input>


                    <RectButton style={style.loginButton} onPress={handleNavigateToFinancial}>
                        <Text style={[style.loginButtonText]}>Próximo</Text>
                    </RectButton>
                </View>
            </ScrollView>

        </View>
    );
}

export default CompanyAbout;