import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";


export default class Opicao extends React.Component {
  render() {
    return (
      <View style={styles.top}>
        <TouchableOpacity style={styles.container}>
        <Text style={styles.text}>
          <Image style={styles.Logo} source={require('../../../assets/lista.png')}/>
          Cadastrar Serviço</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.container}>
        <Text style={styles.text}>
          <Image style={styles.Logo} source={require('../../../assets/lupa.png')}/>
          Consultar Serviços</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: "30px",
    //backgroundColor:"blue",
    alignItems:"center",
  },
  top:{
    backgroundColor:"black",
    flex:1,
    opacity:"60%"
  },
  text: {
    borderWidth: 0,
    width:"80%",
    height:"100%",
    padding:"5%",
    backgroundColor: "white",
    borderRadius:10,
    alignItems:"center",
    display:'flex',
    color:"#39076A",
    fontSize:18,
    fontStyle:"Roboto",
    fontWeight: "bold"
  },
  Logo: {
    width: 70,
    height: 70,
    marginRight :"50px"
  },

});