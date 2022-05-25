import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from "react";

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Form/>
      <StatusBar style="auto" />
    </View>
  );
}

function Form(){
  const [Campo1, setCampo1] = React.useState(null);
  const [Campo2, setCampo2] = React.useState(null);
  const [Campo3, setCampo3] = React.useState(null);
  const [Campo4, setCampo4] = React.useState(null);
  const [Campo5, setCampo5] = React.useState(null);
  const [Campo6, setCampo6] = React.useState(null);
  const [Campo7, setCampo7] = React.useState(null);
  const [Campo8, setCampo8] = React.useState(null);
  const [Campo9, setCampo9] = React.useState(null);
  const [Campo10, setCampo10] = React.useState(null);
  const [Campo11, setCampo11] = React.useState(null);
  const [Campo12, setCampo12] = React.useState(null);
  const [Campo13, setCampo13] = React.useState(null);
  const [Campo14, setCampo14] = React.useState(null);
  const [Campo15, setCampo15] = React.useState(null);
  const [Campo16, setCampo16] = React.useState(null);
  const [Campo17, setCampo17] = React.useState(null);
  const [Campo18, setCampo18] = React.useState(null);
  const [Campo19, setCampo19] = React.useState(null);
  const [Campo20, setCampo20] = React.useState(null);
  const [message, setMessage] = useState(null);
  const [textButton, setTextButton] = useState("APOSTAR");

function validar_aposta(){
    if (Campo1 != null){
      setCampo1(null)
      
    if (Campo2 != null){
      setCampo2(null)  

    if (Campo3 != null){
      setCampo3(null)

    if (Campo4 != null){
      setCampo4(null)

    if (Campo5 != null){
      setCampo5(null)

    if (Campo6 != null){
      setCampo6(null)

    if (Campo7 != null){
      setCampo7(null)

    if (Campo8 != null){
      setCampo8(null)

    if (Campo9 != null){
      setCampo9(null)

    if (Campo10 != null){
      setCampo10(null)

    if (Campo11 != null){
      setCampo11(null)

    if (Campo12 != null){
      setCampo12(null)

    if (Campo13 != null){
      setCampo13(null)

    if (Campo14 != null){
      setCampo14(null)

    if (Campo15 != null){
      setCampo15(null)

    if (Campo16 != null){
      setCampo16(null)

    if (Campo17 != null){
      setCampo17(null)

    if (Campo18 != null){
      setCampo18(null)

    if (Campo19 != null){
      setCampo19(null)

    if (Campo20 != null){
      setCampo20(null)
    return
    }}}}}}}}}}}}}}}}}}}}
  
      setTextButton("APOSTAR")
      setMessage("Preencha todos os campos!!!")
  }

  return (
    <View style={styles.formContext}>
      <View style={styles.form}>

        <Text style={styles.formLabel}>  AMÉRICA-MG              X              AVAÍ-SC</Text>
        <TextInput style={styles.input1}
          onChangeText={setCampo1}
          value={Campo1}
          keyboardType="numeric"
        />
        <TextInput style={styles.input2}
          onChangeText={setCampo2}
          value={Campo2}
          keyboardType="numeric"
        />
       
        <Text style={styles.formLabel}>          FLAMENGO-RJ              X               ATLÉTICO-GO</Text>
        <TextInput style={styles.input3}
          onChangeText={setCampo3}
          value={Campo3}
          keyboardType="numeric"
        />
        <TextInput style={styles.input4}
          onChangeText={setCampo4}
          value={Campo4}
          keyboardType="numeric"
        />

        <Text style={styles.formLabel}>        BRAGANTINO-SP              X              JUVENTUDE-RS</Text>
        <TextInput style={styles.input5}
          onChangeText={setCampo5}
          value={Campo5}
          keyboardType="numeric"
        />
        <TextInput style={styles.input6}
          onChangeText={setCampo6}
          value={Campo6}
          keyboardType="numeric"
        />

        <Text style={styles.formLabel}>      CORINTHIANS-SP              X              BOTAFOGO-RJ</Text>
        <TextInput style={styles.input7}
          onChangeText={setCampo7}
          value={Campo7}
          keyboardType="numeric"
        />
        <TextInput style={styles.input8}
          onChangeText={setCampo8}
          value={Campo8}
          keyboardType="numeric"
        />

        <Text style={styles.formLabel}>                    SANTOS-SP              X              FLUMINENSE-RJ</Text>
        <TextInput style={styles.input9}
          onChangeText={setCampo9}
          value={Campo9}
          keyboardType="numeric"
        />
        <TextInput style={styles.input10}
          onChangeText={setCampo10}
          value={Campo10}
          keyboardType="numeric"
        />

        <Text style={styles.formLabel}>INTERNACIONAL-RS              X              ATLÉTICO-MG</Text>
        <TextInput style={styles.input11}
          onChangeText={setCampo11}
          value={Campo11}
          keyboardType="numeric"
        />
        <TextInput style={styles.input12}
          onChangeText={setCampo12}
          value={Campo12}
          keyboardType="numeric"
        />

        <Text style={styles.formLabel}>                    CEARÁ-CE              X              PALMEIRAS-SP</Text>
        <TextInput style={styles.input13}
          onChangeText={setCampo13}
          value={Campo13}
          keyboardType="numeric"
        />
        <TextInput style={styles.input14}
          onChangeText={setCampo14}
          value={Campo14}
          keyboardType="numeric"
        />

        <Text style={styles.formLabel}>                GOIÁS-GO              X              CORITIBA-PR</Text>
        <TextInput style={styles.input15}
          onChangeText={setCampo15}
          value={Campo15}
          keyboardType="numeric"
        />
        <TextInput style={styles.input16}
          onChangeText={setCampo16}
          value={Campo16}
          keyboardType="numeric"
        />

        <Text style={styles.formLabel}>                 CUIABÁ-MT              X              FORTALEZA-CE</Text>
        <TextInput style={styles.input17}
          onChangeText={setCampo17}
          value={Campo17}
          keyboardType="numeric"
        />
        <TextInput style={styles.input18}
          onChangeText={setCampo18}
          value={Campo18}
          keyboardType="numeric"
        />

        <Text style={styles.formLabel}>            ATHLETICO-PR              X              SÃO PAULO-SP</Text>
        <TextInput style={styles.input19}
          onChangeText={setCampo19}
          value={Campo19}
          keyboardType="numeric"
        />
        <TextInput style={styles.input20}
          onChangeText={setCampo20}
          value={Campo20}
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.buttonCalculator} onPress={() => validar_aposta()}>
          <Text style={styles.textButtonCalculator}>APOSTAR</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

function Title(){
  return (
    <View style={styles.boxTitle}>
      <Text  style={styles.textTitle}>20ª RODADA</Text>
    </View>
  );
}

 const styles = StyleSheet.create({

  container:{
    backgroundColor: "orangered",
    paddingTop: 74,
},
 
  formContext:{
    width: "100%",
    height: "100%",
    bottom: 0,
    backgroundColor: "black",
    alignItems: "center",
},
  
  form:{
    width: "100%",
    height: "100%",
    marginTop: -6,
    padding: 10,
},
  
  formLabel:{
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: 'center',
    marginTop: 24,
},
 
  input1:{
    width: "2%",
    backgroundColor: "#ffffff",
    height: 16,
    paddingLeft: 10,
    marginTop: -16,
    marginLeft: 650,
},

  input2:{
    width: "2%",
    backgroundColor: "#ffffff",
    height: 16,
    paddingLeft: 10,
    marginTop: -16,
    marginLeft: 708,
},

  input3:{
    width: "2%",
    backgroundColor: "#ffffff",
    height: 16,
    paddingLeft: 10,
    marginTop: -16,
    marginLeft: 650,
},
  
  input4:{
    width: "2%",
    backgroundColor: "#ffffff",
    height: 16,
    paddingLeft: 10,
    marginTop: -16,
    marginLeft: 708,
},

  input5:{
    width: "2%",
    backgroundColor: "#ffffff",
    height: 16,
    paddingLeft: 10,
    marginTop: -16,
    marginLeft: 650,
},

  input6:{
    width: "2%",
    backgroundColor: "#ffffff",
    height: 16,
    paddingLeft: 10,
    marginTop: -16,
    marginLeft: 708,
},

  input7:{
    width: "2%",
    backgroundColor: "#ffffff",
    height: 16,
    paddingLeft: 10,
    marginTop: -16,
    marginLeft: 650,
},

  input8:{
    width: "2%",
    backgroundColor: "#ffffff",
    height: 16,
    paddingLeft: 10,
    marginTop: -16,
    marginLeft: 708,
},

  input9:{
    width: "2%",
    backgroundColor: "#ffffff",
    height: 16,
    paddingLeft: 10,
    marginTop: -16,
    marginLeft: 650,
},

  input10:{
    width: "2%",
    backgroundColor: "#ffffff",
    height: 16,
    paddingLeft: 10,
    marginTop: -16,
    marginLeft: 708,
},

  input11:{
    width: "2%",
    backgroundColor: "#ffffff",
    height: 16,
    paddingLeft: 10,
    marginTop: -16,
    marginLeft: 650,
},

  input12:{
    width: "2%",
    backgroundColor: "#ffffff",
    height: 16,
    paddingLeft: 10,
    marginTop: -16,
    marginLeft: 708,
},

  input13:{
    width: "2%",
    backgroundColor: "#ffffff",
    height: 16,
    paddingLeft: 10,
    marginTop: -16,
    marginLeft: 650,
},

  input14:{
    width: "2%",
    backgroundColor: "#ffffff",
    height: 16,
    paddingLeft: 10,
    marginTop: -16,
    marginLeft: 708,
},

  input15:{
    width: "2%",
    backgroundColor: "#ffffff",
    height: 16,
    paddingLeft: 10,
    marginTop: -16,
    marginLeft: 650,
},

  input16:{
    width: "2%",
    backgroundColor: "#ffffff",
    height: 16,
    paddingLeft: 10,
    marginTop: -16,
    marginLeft: 708,
},

  input17:{
    width: "2%",
    backgroundColor: "#ffffff",
    height: 16,
    paddingLeft: 10,
    marginTop: -16,
    marginLeft: 650,
},

  input18:{
    width: "2%",
    backgroundColor: "#ffffff",
    height: 16,
    paddingLeft: 10,
    marginTop: -16,
    marginLeft: 708,
},

  input19:{
    width: "2%",
    backgroundColor: "#ffffff",
    height: 16,
    paddingLeft: 10,
    marginTop: -16,
    marginLeft: 650,
},

  input20:{
    width: "2%",
    backgroundColor: "#ffffff",
    height: 16,
    paddingLeft: 10,
    marginTop: -16,
    marginLeft: 708,
},

  buttonCalculator:{
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "7%",
    backgroundColor: "orangered",
    paddingTop: 2,
    paddingBottom: 4,
    marginTop: 15,
    marginBottom: 22,
    marginLeft: 645,
},
  
  textButtonCalculator:{
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
},

  boxTitle:{
    alignItems: "center",
    justifyContent: "center",
    marginTop: -80,
},

  textTitle:{
    color: "black",
    fontSize: 48,
    fontWeight: "bold",
},
});