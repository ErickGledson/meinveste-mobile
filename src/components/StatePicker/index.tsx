import React, { Component } from 'react';
import { Picker, View } from 'react-native';

export default class StatePicker extends Component {
  state = {
    hand: 'right',
  }

  render() {
    return (
      <View>
        <Picker
          selectedValue={this.state.hand}
          onValueChange={hand => this.setState({ hand })}
          style={{ width: "100%"}}
          mode="dropdown">
          <Picker.Item value="AC" label='Acre' />
          <Picker.Item value="AL" label='Alagoas' />
          <Picker.Item value="AP" label='Amapá' />
          <Picker.Item value="AM" label='Amazonas' />
          <Picker.Item value="BA" label='Bahia' />
          <Picker.Item value="CE" label='Ceará' />
          <Picker.Item value="DF" label='Distrito Federal' />
          <Picker.Item value="ES" label='Espírito Santo' />
          <Picker.Item value="GO" label='Goiás' />
          <Picker.Item value="MA" label='Maranhão' />
          <Picker.Item value="MT" label='Mato Grosso' />
          <Picker.Item value="MS" label='Mato Grosso do Sul' />
          <Picker.Item value="MG" label='Minas Gerais' />
          <Picker.Item value="PA" label='Pará' />
          <Picker.Item value="PB" label='Paraíba' />
          <Picker.Item value="PR" label='Paraná' />
          <Picker.Item value="PE" label='Pernambuco' />
          <Picker.Item value="PI" label='Piauí' />
          <Picker.Item value="RJ" label='Rio de Janeiro'></Picker.Item>
          <Picker.Item value="RN" label='Rio Grande do Norte'></Picker.Item>
          <Picker.Item value="RS" label='Rio Grande do Sul' />
          <Picker.Item value="RO" label='Rondônia' />
          <Picker.Item value="RR" label='Roraima' />
          <Picker.Item value="SC" label='Santa Catarina' />
          <Picker.Item value="SP" label='São Paulo' />
          <Picker.Item value="SE" label='Sergipe' />
          <Picker.Item value="TO" label='Tocantins' />
        </Picker>
        <View style={{ borderBottomColor: '#c7c7c7', borderBottomWidth: 1}} />
      </View>
    );
  }
}
