import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, ToastAndroid, Button } from 'react-native';
//import Sound from 'react-native-sound';

const Cambiarname = () => {

  const [CambioName, setcambioName] = useState([]);
  //const [numero2, setNumero2] = useState(30);
  const [resultadoName, setResultadoName] = useState(0);
  
  const [mostrarResultadoName, setMostrarResultadoName] = useState(false);
 
    useEffect(() => {
    //ESTO SE EJECUTA UNA SOLA VEZ
    ToastAndroid.show("se cargo la aplicacion correctamente", ToastAndroid.SHORT)
  }, [])

  const cambio = () => {
    let rta =0;
     rta.push(CambioName);
    setResultadoName(rta);
    setMostrarResultadoName();
    ToastAndroid.show('Se ha realizado la mostrado el cambio de Nombre!', ToastAndroid.SHORT);
  }

  const estilos = StyleSheet.create({
    inputsTexto: {
      height: 40,
      width: 100,
      margin: 10,
      borderWidth:5,
      padding: 10,
      borderColor: 'blue',
      borderWidth: 5,
    },
        /*LetraCalculadoraTexto :{
          borderColor:'red',
          },*/
  });

  return (
    <View >
      <Text>iNGRESE EL NOMBRE</Text>

      <TextInput style={estilos.inputsTexto} onChangeText={setcambioName} value={CambioName} placeholder="Nombre new" keyboardType="numeric" color ="white"/>

      <Button onPress={cambio} title="VAMOS A CAMBIAR DE NOMBRE"color="red" />

      {resultadoName>0 && (<Text>El Nombre Nuevo es: {resultadoName}</Text>)}
 
    


    </View>
  );
};

export default Cambiarname