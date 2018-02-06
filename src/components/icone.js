import React from 'react';
import { View, Text, Image } from 'react-native';

const imagemPedra = require('../../assets/pedra.png');
const imagemPapel = require('../../assets/papel.png');
const imagemTesoura = require('../../assets/tesoura.png');

const Estilos = {
  
  icone: {
    alignItems: 'center',
    marginBottom: 20
  },

  txtJogador: {
    fontSize: 18
  }

}

class Icone extends React.Component {
  render() {
    const { icone, txtJogador } = Estilos;

    if (this.props.escolha === 'pedra') {
      return (
        <View style={icone}>
          <Text style={txtJogador}>{this.props.jogador}</Text>
          <Image source={ imagemPedra } />
        </View>
      );
    }
    else if (this.props.escolha == 'papel') {
      return (
        <View style={icone}>
          <Text style={txtJogador}>{this.props.jogador}</Text>
          <Image source={ imagemPapel } />
        </View>
      );
    }
    else if (this.props.escolha == 'tesoura') {
      return (
        <View style={icone}>
          <Text style={txtJogador}>{this.props.jogador}</Text>
          <Image source={ imagemTesoura } />
        </View>
      );
    }
    return false;
  }
}

export default Icone;
