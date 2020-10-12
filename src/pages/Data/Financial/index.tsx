import React from 'react';
import { View, Text, Platform } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import Input from '../../../components/Input';
import style from './styles'
import Header from '../../../components/Header';
import { useNavigation } from '@react-navigation/native';
import CreditReasonPicker from '../../../components/CreditReasonPicker';

const Financial: React.FC = () => {
    const { navigate } = useNavigation();

    function handleNavigateToFinished(){
        navigate('Finished')
    }

    return (
        <View style={style.container}>
            <ScrollView>
                <Header menu={true} />

                <View style={{ padding: 20 }}>
                    <Text style={style.title}>Financiamento</Text>

                    <CreditReasonPicker/>
                    <Input type='none' label='Data de Abertura'></Input>
                    <Input type='none' label='Descrição breve de atividades'></Input>

                    <Text style={style.title}>Finanças do seu negócio</Text>

                    <Input type='none' label='Seu plano de negócios'></Input>
                    <RectButton style={style.fileUploader}>
                        <Text style={[style.fileUploaderText]}>Anexar Arquivo</Text>
                        <Feather name="upload" size={18} color="#032E4E" />
                    </RectButton>

                    <Input type='none' label='Últimas 6 faturas bancárias'></Input>
                    <RectButton style={style.fileUploader}>
                        <Text style={[style.fileUploaderText]}>Anexar Arquivo</Text>
                        <Feather name="upload" size={18} color="#032E4E"  style={{marginBottom: 3}}/>
                    </RectButton>

                    <Text style={style.subtitle}>Ou exporte diretamente da sua conta getnet</Text>

                    <RectButton style={style.getnet}>
                        <Text style={[style.fileUploaderText]}>Sincronizar Getnet</Text>
                    </RectButton>

                    <RectButton style={style.loginButton} onPress={handleNavigateToFinished}>
                        <Text style={[style.loginButtonText]}>Próximo</Text>
                    </RectButton>
                </View>
            </ScrollView>

        </View>
    );
}

export default Financial;