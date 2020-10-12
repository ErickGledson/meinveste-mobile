import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import Header from '../../components/Header';
import style from './styles';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const MyInvestiments: React.FC = () => {
    const { navigate } = useNavigation();

    function handleNavigateToAnalysis() {
        navigate('Analysis')
    }

    return (
        <View>
            <Header menu={true} />

            <View style={{ padding: 30 }}>
                <Text style={style.title}>Acompanhe as análises Getnet dos seus investimentos</Text>

                <View style={style.container}>
                    <View style={style.item}>
                        <Text style={style.companyTitle}>Luminárias da Lu</Text>
                        <BorderlessButton onPress={handleNavigateToAnalysis}>
                            <Feather name="chevron-right" size={30} color="white" />
                        </BorderlessButton>
                    </View>

                    <View style={style.item}>
                        <Text style={style.companyTitle}>Padaria Celilia</Text>
                        <BorderlessButton>
                            <Feather name="chevron-right" size={30} color="white" />
                        </BorderlessButton>
                    </View>

                    <View style={[style.item, { borderBottomColor: 'transparent' }]}>
                        <Text style={style.companyTitle}>Jõao do Açai</Text>
                        <BorderlessButton>
                            <Feather name="chevron-right" size={30} color="white" />
                        </BorderlessButton>
                    </View>

                </View>

            </View>
        </View>
    );
}

export default MyInvestiments;