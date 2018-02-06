import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import Topo from './src/components/topo';
import Icone from './src/components/icone';

const Estilos = {

  principal: {
    backgroundColor: '#ADD8E6',
    flex: 1
  },

  btnEscolha: {
    width: 90
  },

  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10
  },

  palco: {
    marginTop: 20,
    alignItems: 'center'
  },

  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    marginVertical: 20
  },

}

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = { escolhaUsuario: '', escolhaComputador: '', resultado: '' };
    
  }

  jokenpo(escolhaUsuario) {

    // gerar numero aleatorio entre 0 e 2

    let numeroAleatorio = Math.random();
    numeroAleatorio = Math.floor(numeroAleatorio * 3);

    let escolhaComputador = '';

    switch (numeroAleatorio) {

      case 0: escolhaComputador='pedra'; break;
      case 1: escolhaComputador='papel'; break;
      case 2: escolhaComputador='tesoura'; break;
      default: escolhaComputador='';
    }

    let resultado = '';

    if (escolhaComputador === 'pedra') {
      if (escolhaUsuario === 'pedra') {
        resultado = 'Empate!';
      }
      else if (escolhaUsuario === 'papel') {
        resultado = 'Você ganhou!'
      }
      else if (escolhaUsuario === 'tesoura') {
        resultado = 'Você perdeu!'
      }
    }
    else if (escolhaComputador === 'papel') {
      if (escolhaUsuario === 'pedra') {
        resultado = 'Você perdeu!';
      }
      else if (escolhaUsuario === 'papel') {
        resultado = 'Empate!'
      }
      else if (escolhaUsuario === 'tesoura') {
        resultado = 'Você ganhou!'
      }
    }
    else if (escolhaComputador === 'tesoura') {
      if (escolhaUsuario === 'pedra') {
        resultado = 'Você ganhou!';
      }
      else if (escolhaUsuario === 'papel') {
        resultado = 'Você perdeu!'
      }
      else if (escolhaUsuario === 'tesoura') {
        resultado = 'Empate!'
      }
    }
    

    this.setState({ escolhaUsuario, escolhaComputador, resultado });

  }

  render() {
    const { btnEscolha, painelAcoes, principal, palco, txtResultado } = Estilos;
    return (
      
      <View style={principal}>

        <Topo />

        <View style={painelAcoes}>

          <Button style={btnEscolha}
            title='pedra'
            onPress={() => { this.jokenpo('pedra'); }}
          />
          <Button style={btnEscolha}
            title='papel'
            onPress={() => { this.jokenpo('papel'); }}
          />
          <Button style={btnEscolha}
            title='tesoura'
            onPress={() => { this.jokenpo('tesoura'); }}
          />

        </View>

        <View style={palco}>

          <Text style={txtResultado}>{this.state.resultado}</Text>

          <Icone escolha={this.state.escolhaUsuario} jogador='Você' />
          <Icone escolha={this.state.escolhaComputador} jogador='Computador' />

        </View>

      </View>

    );
  }
}
