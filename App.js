import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import Manter from "./src/pages/manter_servicos/manter.js";
import Opicao from "./src/pages/opicoes/Opicao.js";
import { LinearGradient } from 'expo-linear-gradient';
export default function App() {
  return (
    <LinearGradient
    colors={['#06A5F5', '#9E36FE']}
    style={styles.container}>
    <View style={styles.container}>
      
      <Text style={styles.top}>Teste</Text>
      <Opicao/>
      <Text style={styles.teste }>Teste</Text>
    </View>
    </LinearGradient>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // backgroundColor: 'purple',
  },
  teste:{
    backgroundColor:"white",
    padding:17,
    textAlign:"center"
  },
  top:{
    backgroundColor:"white",
    padding:17,
    textAlign:"center",
    marginTop:"10px",
  }
});
