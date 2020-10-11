import React from 'react';
import { View } from 'react-native';

import styles from './styles';

interface ButtonProps {
    text: string
    color: string
}

const Button: React.FC<ButtonProps> = ({ text, color }) => {
    return (
        <View style={styles.container}>
            
        </View>
    );
}

export default Button;