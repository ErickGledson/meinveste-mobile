import React, { Component } from 'react';
import { Picker, View } from 'react-native';

export default class SegmentPicker extends Component {
  state = {
    hand: 'right',
  }

  render() {
    return (
      <View style={{marginBottom: 10}}>
        <Picker
          selectedValue={this.state.hand}
          onValueChange={hand => this.setState({ hand })}
          style={{ width: "100%"}}
          mode="dropdown">
          <Picker.Item value="moda" label='Moda' />
          <Picker.Item value="saude-beleza" label='Saúde e Beleza' />
          <Picker.Item value="eletronicos" label='Eletrônicos' />
          <Picker.Item value="games" label='Games' />
          <Picker.Item value="alimentacao" label='Alimentação' />
          <Picker.Item value="artesanato" label='Artesanato' />
          <Picker.Item value="turismo" label='Turismo' />
          <Picker.Item value="varejo" label='Loja (Varejo)' />
          <Picker.Item value="artigos-esportivos" label='Artigos Esportivos' />
          <Picker.Item value="educacao" label='Educação' />
          <Picker.Item value="agricultura" label='Agricultura' />
          <Picker.Item value="servico" label='Prestação de Serviço' />
          <Picker.Item value="outros" label='Outros' />
        </Picker>
        <View style={{ borderBottomColor: '#c7c7c7', borderBottomWidth: 1}} />
      </View>
    );
  }
}
