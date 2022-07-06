import React, { useState } from 'react';
import { Text, Button, View, TouchableOpacity } from 'react-native';
import style from './style';

export const Aposta = ({ navigation }) => {
  return (

    <View>
    

    <TouchableOpacity style={style.regulamento}>
      <Text style={style.textoregulamento} onPress={() => navigation.navigate('Regulamento')}>Ver regulamento</Text>
    </TouchableOpacity>


    </View>
  )
};

export default Aposta;
