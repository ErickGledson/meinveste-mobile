import React from 'react';
import { View, Text, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

import Header from '../../components/Header';
import companyPhoto from '../../assets/images/company-photo.png'
import companyVideo from '../../assets/images/company-video.png'
import companyOwner from '../../assets/images/company-owner.png'
import investFrame from '../../assets/images/invest-frame.png'


import progress from '../../assets/icons/progress-details.png'

import style from './styles';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import InvestContent from '../../components/InvestContent';
import CompanyPlan from '../../components/CompanyPlan';

const CompanyProfile: React.FC = () => {
    return (
        <ScrollView>

            <Header menu={true} />

            <View style={{ margin: 35, marginBottom: 5, marginTop: 40 }}>
                <Text style={style.title}>Luminárias da Lu</Text>
            </View>
            <Image source={companyPhoto} style={{ margin: 0, width: '100%' }} />

            <View style={{ margin: 25, marginBottom: 5, marginTop: 2, justifyContent: "center" }}>
                <View style={{ flexDirection: "row" }}>
                    <Feather name="map-pin" size={20} color="#032E4E" style={{ marginTop: 2 }} />
                    <Text style={style.localText}>Limoeiro - SP</Text>
                </View>

                <Image source={progress} style={{ marginTop: 20, alignSelf: "center" }} />

                <RectButton style={style.invest}>
                    <Text style={[style.investText]}>Investir</Text>
                </RectButton>

                <Text style={style.subtitle}>Quem somos?</Text>
                <Image source={companyVideo} style={{ marginTop: 20, alignSelf: "center", width: '100%' }} />
                <Text style={style.description}>
                    A Luminárias da Lu é uma pequena loja local que vende objetos para iluminar a vida das pessoas.
                    Muito mais do quue lâmpadas e lumiárias, vendemos sorrisos para os clientes que procuram decorar seu espaço da forma que sempre sonharam.
                    Nascemos há 4 anos, após 2 anos de planejamento e pesquisas sobre a melhor forma de iniciar o negócio e conseguimos atingir o público desejado
                </Text>

                <Text style={style.subtitle}>Quem está por trás?</Text>
                <Image source={companyOwner} style={{ marginTop: 20, alignSelf: "center", width: '100%' }} />
                <Text style={style.description}>
                    Eu sou a Luísa, dona do Luminárias da Lu desde 2017 quando todo o sonho começou para valer. Sou formada em admnistração e sempre fui apaixonada por decoração,
                    então decidi unir minhas duas paixões investindo nesse negócio. Também cresci minha vida inteira no bairro do Limoeiro, grande parte dos meus primeiros clientes
                    faziam parte da vizinhança. Acho bastante importante ter esse contato mais próximo com quem entra na minha loja.
                </Text>

                <Text style={style.subtitle}>Investimentos</Text>
                <Text style={style.investSectionText}>Detalhamento dos gastos:</Text>
                <InvestContent text='Melhorias em nossa plataforma digital de vendas' value='1300' />
                <InvestContent text='Últimas parcelas dos automóveis de entrega' value='4000' />
                <InvestContent text='Fornecedores (lâmpadas, luminárias e fitas de LED)' value='5000' />
                <InvestContent text='Restauração da fachada do estabelecimento' value='700' />
                <InvestContent text='Taxa MEInveste' value='1000' />

                <Text style={[style.investSectionInfo, { marginTop: 30 }]}>Meta de investimento - R$ 12000,00</Text>
                <Text style={style.investSectionInfo}>Data limite: 09/22</Text>
                <Text style={[style.investSectionInfo, { marginBottom: 10 }]}>Taxa por investimento - 12% anual</Text>


                <Text style={style.subtitle}>Por que a gente?</Text>
                <Text style={style.investSectionText}>Nosso plano de negócios</Text>
                <CompanyPlan />

                <Text style={style.subtitle}>Onde nos encontrar?</Text>
                <View style={{ flexDirection: "row", marginTop: 20, marginLeft: 15 }}>
                    <Feather name="link" size={24} color="#871313" style={{ marginRight: 10 }} />
                    <Text style={style.linkText}>lojaluminariasdalu.com.br</Text>
                </View>

                <View style={{ flexDirection: "row", marginTop: 10, marginLeft: 15 }}>
                    <Feather name="facebook" size={24} color="#871313" style={{ marginRight: 10 }} />
                    <Text style={style.linkText}>facebook.com.br/luminariasdalu</Text>
                </View>

                <View style={{ flexDirection: "row", marginTop: 10, marginBottom: 30, marginLeft: 15 }}>
                    <Feather name="instagram" size={24} color="#871313" style={{ marginRight: 10 }} />
                    <Text style={style.linkText}>@luminariasdalu</Text>
                </View>




            </View>
        </ScrollView>
    );
}

export default CompanyProfile;