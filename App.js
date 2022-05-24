import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image, ScrollView } from 'react-native';





export default function App() {
    const [text, setText] = useState("");
    function onPressButton() {
        let num = parseInt(text);
        let texto = "O numero é impar"
        if (num % 2 == 0) {
            texto = "O numero é par"

        }
        alert(texto);
    }


    return (
        //<ScrollView style={styles.container}>
            <View style={styles.container}>
                <Image source={{ uri: "https://seeklogo.com/images/S/soccer-bets-logo-E899551478-seeklogo.com.png" }} style={{ width: ' 100%', height: ' 45%' }} />

                <Text style={styles.titulo}> Soccer bets</Text>

                <TextInput style={styles.input}
                    placeholder='Nome Completo'
                    onChangeText={text => setText(text)}
                    defaultValue={text}
                />
                <TextInput style={styles.input}
                    placeholder='Data de Nascimento'
                    onChangeText={text => setText(text)}
                    defaultValue={text}
                />
                
                <TextInput style={styles.input}
                    placeholder='Email'
                    onChangeText={text => setText(text)}
                    defaultValue={text}
                />
                <TextInput style={styles.input}
                    placeholder='Senha'
                    onChangeText={text => setText(text)}
                    defaultValue={text}
                />

                <TouchableOpacity style={styles.button} onPress={() => onPressButton()}>
                    <Text style={styles.textButtonCalculator}>Cadastrar</Text>
                </TouchableOpacity>

                <StatusBar style="auto" />
            </View>
        //</ScrollView>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DCDCDC',
        alignItems: 'center',
       
        
    },
    button: {

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
    input: {
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
    titulo: {
        color: "orange",
        marginTop: 30,
        fontSize: 40,
    },
    buttoncadastro: {
        marginLeft: 220,
        marginTop: 40,
    },
    textButtonCalculator: {
        color: 'white'
    },
    textButtonCcadastro: {
        color: 'black'
    },



});