import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


function cadastro() {
    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");
    const [text3, setText3] = useState("");
    const [text4, setText4] = useState("");




    return (

        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>

                <Image style={styles.image} source={{ uri: "https://seeklogo.com/images/S/soccer-bets-logo-E899551478-seeklogo.com.png" }} />

                <Text style={styles.titulo}> Soccer bets</Text>

                <TextInput style={styles.input}
                    placeholder='Nome Completo'
                    onChangeText={text1 => setText1(text1)}
                    defaultValue={text1}
                />
                <TextInput style={styles.input}
                    placeholder='Data de Nascimento'
                    onChangeText={text2 => setText2(text2)}
                    defaultValue={text2}
                />

                <TextInput style={styles.input}
                    placeholder='Email'
                    onChangeText={text3 => setText3(text3)}
                    defaultValue={text3}
                />
                <TextInput style={styles.input}
                    placeholder='Senha'
                    onChangeText={text4 => setText4(text4)}
                    defaultValue={text4}
                />

                <TouchableOpacity style={styles.button} onPress={() => criarcadastro()}>
                    <Text style={styles.textButtonCalculator}>Cadastrar</Text>
                </TouchableOpacity>



            </ScrollView >
        </View>


    );
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0000CD',
        alignItems: 'center',
    },

    scrollView: {
        backgroundColor: '#0000CD',
        marginHorizontal: 100,
        marginTop: 40,
        width: '100%',

    },

    text: {
        fontSize: 50,
    },

    button: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "50%",
        backgroundColor: "#00FFFF",
        paddingTop: 5,
        paddingBottom: 5,
        marginLeft: 102,
        marginTop: 30,


    },
    input: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "white",
        paddingTop: 20,
        paddingBottom: 5,
        marginLeft: 12,
        marginTop: 50,
        textAlign: "center",

    },
    titulo: {
        color: "orange",
        marginTop: 30,
        fontSize: 40,
        marginLeft: 100,
    },
    buttoncadastro: {
        marginLeft: 300,
        marginTop: 40,
    },

    textButtonCalculator: {
        color: 'black'
    },
    textButtonCcadastro: {
        color: 'black'
    },

    image: {
        width: 250,
        height: 250,
        marginLeft: 80,
    },
})