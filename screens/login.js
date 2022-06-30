import { useState } from 'react'; 
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image, ScrollView } from 'react-native';
import * as React from 'react';



export default function logar() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  
  
  
  return (
    <View style={styles.container}>
     <ScrollView style={styles.scrollView}>
      <Image style={styles.image} source={{ uri: "https://seeklogo.com/images/S/soccer-bets-logo-E899551478-seeklogo.com.png" }}  />
      
      <Text style={styles.titulo}> Soccer bets</Text>
     
        <TextInput style={styles.input}
          placeholder='Usuário'
          onChangeText={text1 => setText1(text1)}
          defaultValue={text1}
        />
        <TextInput style={styles.input}
          placeholder='Senha'
          onChangeText={text2 => setText2(text2)}
          defaultValue={text2}
        />
      
     <TouchableOpacity style={styles.button} onPress={() => logar()}>
     <Text style={styles.textButtonCalculator}>Entrar</Text>
     </TouchableOpacity>
     
     <TouchableOpacity style={styles.buttoncadastro} onPressButton={() => navegar()}>
     <Text style={styles.textButtoncadastro}> Criar novo cadastro</Text>
     </TouchableOpacity>
     
     
      
     </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  button:{
    
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
    backgroundColor: "#00008B",
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 120,
    marginTop: 30,
    
  },
  input:{
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "70%",
    backgroundColor: "white",
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 50,
    marginTop: 30,
    textAlign: "center",
  },
  titulo:{
    color: "orange",
    marginTop: 30,
    fontSize: 40,
    marginLeft: 70,
  },
  buttoncadastro:{
    marginTop: 30,
    marginLeft: 230
  },
  textButtonCalculator:{
    color: "white"
  },
  textButtoncadastro:{
    color: "white",
    backgroundColor: "#00008B",
    borderRadius: 20,
    width: '80%',
    
  },
  image: {
    width: 400,
    height: 400,
    marginLeft: 0,
},
scrollView:{
  textAlign: 'center',
}
  
});