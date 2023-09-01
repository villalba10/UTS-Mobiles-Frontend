import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, ToastAndroid, Button } from 'react-native';
//import Sound from 'react-native-sound';

const Calculadora = () => {

  const [numero1, setNumero1] = useState(10);
  const [numero2, setNumero2] = useState(30);
  const [resultado, setResultado] = useState(0);
  
  const [mostrarResultado, setMostrarResultado ] = useState(false);
 
  useEffect(() => {
    //ESTO SE EJECUTA UNA SOLA VEZ
    ToastAndroid.show("se cargo la aplicacion correctamente", ToastAndroid.SHORT)
  }, [])

  const SUMARL = () => {
    let rta = parseInt(numero1) + parseInt(numero2);
    setResultado(rta);
    setMostrarResultado();
    ToastAndroid.show('Se ha realizado la suma!', ToastAndroid.SHORT);
  }

  const estilos = StyleSheet.create({
    inputsTexto: {
      height: 40,
      width: 80,
      margin: 10,
      borderWidth: 1,
      padding: 10,
      borderColor: 'blue',
      borderWidth: 3,
    },
  });

  return (
    <View >
      <Text>CALCULADORA</Text>

      <TextInput style={estilos.inputsTexto} onChangeText={setNumero1} value={numero1} placeholder="Numero 1" keyboardType="numeric" color ="white"/>

      <TextInput style={estilos.inputsTexto} onChangeText={setNumero2} value={numero2} placeholder="Número 2" keyboardType="numeric" color="white"/>

      <Button onPress={SUMARL} title="Sumar" color="red" />

      {resultado>0 && (<Text>El resultado es {resultado}</Text>)}
 
    


    </View>
  );
};

export default Calculadora