import React from 'react';
import { View, Text } from 'react-native';

import style from './styles';

const CompanyPlan: React.FC = () => {
    return (
        <View style={style.container}>
            <Text style={style.title}>Por que fazemos?</Text>
            <Text style={style.description}>A união de uma paixão por empreender e decorar unida à vontade de trazer felicidade por meio dos nossos produtos.</Text>

            <Text style={style.title}>O que fazemos?</Text>
            <Text style={style.description}>Vendemos luminárias, fitas de LED, lâmpadas, abajures e outros elementos de decoração.</Text>

            <Text style={style.title}>Como fazemos?</Text>
            <Text style={style.description}>Vendas através do nosso site, nossa loja física e encomendas através das redes sociais.</Text>

            <Text style={style.title}>Para quem fazemos?</Text>
            <Text style={style.description}>Apesar da maioria no nosso público ser representado por mulheres entre os 20 e 50 anos, nosso produto pode atingir todos os públicos.</Text>

            <Text style={style.title}>Nosso diferencial</Text>
            <Text style={style.description}>O tratamento diferenciado através da proximidade com o cliente, vendedores que possuem conhecimentos em decoração, auxiliando assim nossos clientes.</Text>

            <Text style={style.title}>Nossas metas</Text>
            <Text style={style.description}>Expandir nossas vendas virtuais e abrir uma filial no centro da cidade.</Text>
            
        </View>
    );
}

export default CompanyPlan;