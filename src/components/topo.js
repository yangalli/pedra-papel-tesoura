import React from 'react';
import { View, Image } from 'react-native';

const imagemTopo = require('../../assets/jokenpo.png');

class Topo extends React.Component {
  render() {
    return (
      <View>
        <Image source={imagemTopo} />
      </View>
    );
  }
}

export default Topo;
