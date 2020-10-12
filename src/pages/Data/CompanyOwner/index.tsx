import React from 'react';
import { View, Text, Platform } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import Input from '../../../components/Input';
import style from './styles';
import Header from '../../../components/Header';
import StatePicker from '../../../components/StatePicker';


const CompanyOwner: React.FC = () => {
    const { navigate } = useNavigation();

    function handleNavigateToCompany() {
        navigate('Company')
    }

    return (
        <View style={style.container}>
            <ScrollView>
                <Header menu={true} />

                <View style={{ padding: 30 }}>
                    <Text style={style.title}>Vamos começar com os dados do responsável pelo projeto </Text>

                    <View>
                        <Input type='name' label='Nome completo'></Input>
                        <Input type='none' label='Data de Nascimento'></Input>
                        <Input type='none' label='CPF'></Input>
                        <Input type='telephoneNumber' label='Celular'></Input>
                    </View>


                    <Text style={style.title}>Endereço do Responsável </Text>

                    <View>
                        <Input type='postalCode' label='CEP'></Input>
                        <StatePicker/>
                        <Input type='none' label='Bairro'></Input>
                        <Input type='none' label='Endereço'></Input>
                        <Input type='none' label='Complemento'></Input>
                    </View>



                    <RectButton style={style.loginButton} onPress={handleNavigateToCompany}>
                        <Text style={[style.loginButtonText]}>Próximo</Text>
                    </RectButton>
                </View>
            </ScrollView>

        </View>
    );
}

export default CompanyOwner;