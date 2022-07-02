import React, { useState } from 'react';
import { Text,SafeAreaView } from 'react-native';
import style from './style';

export const Aposta = ({ navigation }) => {
  return (
    <SafeAreaView style={style.fundo}>
      <Text style={style.rodada}>20ª RODADA</Text>
      <Text style={style.times}>        AMÉRICA-MG        X        AVAÍ-SC</Text>
    </SafeAreaView>
    
    
  )
};

export default Aposta;
