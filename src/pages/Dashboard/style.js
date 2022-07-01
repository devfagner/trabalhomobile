import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    marginBottom: 16,
  },
  image: {
    marginLeft: 100,
    width: 200,
    height: 200,
    alignItems: "center"
  },
  scrollView:{
    textAlign: 'center',
    width: 400
  },
  input:{
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    backgroundColor: "white",
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 50,
    marginTop: 30,
    textAlign: "center",
  },
  titulo:{
    marginLeft: 120,
    color: "orange",
    marginTop: 30,
    fontSize: 30
  },
  textButtonCalculator:{
    paddingBottom: 20,
    marginTop:35,
    marginLeft: 140,
    backgroundColor: "orange",
    width: 150,
    borderRadius: 30,
    color: 'black',
    textAlign:'center',
    fontSize: 20,
  },
  novocadastro:{
    marginLeft:70,
    backgroundColor: 'black',
  }
});

export default style;