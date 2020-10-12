import React from 'react';
import { View, Text, Platform } from 'react-native';
import Input from '../../../components/Input';

import style from './styles'
import Header from '../../../components/Header';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Company: React.FC = () => {
    const { navigate } = useNavigation();

    function handleNavigateToCompanyAbout(){
        navigate('CompanyAbout')
    }

    return (
        <View style={style.container}>
            <ScrollView>
                <Header menu={true} />

                <View style={{ padding: 20 }}>
                    <Text style={style.title}>Agora preencha com os dados da sua empresa</Text>

                    <Input type='name' label='Nome'></Input>
                    <Input type='none' label='CNPJ'></Input>
                    <Input type='none' label='Razão social'></Input>
                    <Input type='telephoneNumber' label='Telefone comercial'></Input>
                    <Input type='emailAdress' label='Email comercial'></Input>
                    <Input type='none' label='CNAE'></Input>

                    <Text style={style.title}>Endereço da Empresa </Text>

                    <Input type='postalCode' label='CEP'></Input>
                    <Input type='AddressState' label='Estado'></Input>
                    <Input type='none' label='Bairro'></Input>
                    <Input type='none' label='Endereço'></Input>
                    <Input type='none' label='Complemento'></Input>

                    <RectButton style={style.loginButton} onPress={handleNavigateToCompanyAbout}>
                        <Text style={[style.loginButtonText]}>Próximo</Text>
                    </RectButton>
                </View>
            </ScrollView>

        </View>
    );
}

export default Company;