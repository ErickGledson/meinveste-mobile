import React from 'react';
import { View, Text } from 'react-native';

import style from './styles';

interface InvestContentProps {
    value: string,
    text: string
}

const InvestContent: React.FC<InvestContentProps> = ({ value, text }) => {
    return (
        <View>
            <View style={style.valueContainer}>
                <Text style={style.value}>R$ {value}, 00</Text>
            </View>
            <Text style={style.text}>{text}</Text>
        </View>
    );
}

export default InvestContent;