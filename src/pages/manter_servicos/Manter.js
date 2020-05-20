import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";

export default class Manter extends React.Component {
  render() {
    return (
      <View style={styles.top}>
        <TouchableOpacity style={styles.container}>
        <Text style={styles.text}>
          <Image style={styles.Logo} source={require('../../../assets/cabeca.png')}/>
          Gerenciar Profissionais</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.container}>
        <Text style={styles.text}>
          <Image style={styles.Logo} source={require('../../../assets/celular.png')}/>
          Gerenciar Serviços</Text>
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
    marginTop:"30%",
    //backgroundColor:"red",
    flex:1
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