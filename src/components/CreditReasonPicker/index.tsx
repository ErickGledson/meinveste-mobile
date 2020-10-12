import React, { Component } from 'react';
import { Picker, View } from 'react-native';

export default class CreditReasonPicker extends Component {
    state = {
        hand: 'right',
    }

    render() {
        return (
            <View style={{ marginBottom: 10 }}>
                <Picker
                    selectedValue={this.state.hand}
                    onValueChange={hand => this.setState({ hand })}
                    style={{ width: "100%" }}
                    mode="dropdown">
                    <Picker.Item value="capital-de-giro" label='Capital de Giro' />
                    <Picker.Item value="infraestrutura" label='Infraestrutura' />
                    <Picker.Item value="marketing" label='Marketing' />
                    <Picker.Item value="divida" label='Dívida' />
                    <Picker.Item value="contratacao" label='Contratação' />
                    <Picker.Item value="estoque" label='Estoque' />
                    <Picker.Item value="outros" label='Outros' />
                </Picker>
                <View style={{ borderBottomColor: '#c7c7c7', borderBottomWidth: 1 }} />
            </View>
        );
    }
}
