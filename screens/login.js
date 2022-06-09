import { useState } from 'react'; 
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image, ScrollView } from 'react-native';


export default function login() {
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
      
     <TouchableOpacity style={styles.button} onPress={() => onPressButton()}>
     <Text style={styles.textButtonCalculator}>Entrar</Text>
     </TouchableOpacity>
     
     <TouchableOpacity style={styles.buttoncadastro} onPress={() => onPressButton()}>
     <Text style={styles.textButtoncadastro}>Cadastrar</Text>
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
    marginLeft: 12,
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
    marginLeft: 12,
    marginTop: 30,
    textAlign: "center",
  },
  titulo:{
    color: "orange",
    marginTop: 30,
    fontSize: 40,
  },
  buttoncadastro:{
    marginTop: 40,
    marginLeft: 220
  },
  textButtonCalculator:{
    color: "white"
  },
  textButtoncadastro:{
    color: "black"
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