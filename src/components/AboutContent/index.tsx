import React from 'react';
import { Image, Text, View } from 'react-native';

import style from './styles';

import pages from '../../assets/icons/pages.png'


interface AboutContentProps {
    first: boolean,
    number: string,
    description: string
}

const AboutContent: React.FC<AboutContentProps> = ({ first, children, number, description }, props) => {
    if (first) {
        return (
            <View style={style.container}>
                <Text style={style.numberText}>{number}</Text>
                <Text style={style.descriptionText}>{description}</Text>

                <Image source={pages} style={{ marginTop: 40 }} />

                {children}
            </View>
        )
    }
    return (
        <View style={style.container}>
            <Text style={style.numberText}>{number}</Text>
            <Text style={style.descriptionText}>{description}</Text>

            <Image source={pages} style={{ marginTop: 40, transform: [{ rotate: "-180deg" }] }} />
            
            {children}
        </View>
    )
}

export default AboutContent;