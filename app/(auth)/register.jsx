import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, useTheme, Provider as PaperProvider, RadioButton } from 'react-native-paper';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Register() {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [checked, setChecked] = React.useState(false);
  const theme = useTheme();

  const handleRegister = async () => {
    // Aquí puedes agregar la lógica de registro
    console.log(correo)
    console.log(password)
    if (correo) {
      // await AsyncStorage.setItem('userToken', 'some-auth-token'); // Guardar el token de autenticación
      router.push('validation'); // Navegar a la aplicación principal
    } else {
      Alert.alert('Registro fallido', 'Por favor, ingresa un nombre de usuario y una contraseña válidos.');
    }
  };

  return (
    <View style={styles.centeredContainer}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Ionicons name="person" size={20} color="#000" style={styles.icon} />
          <TextInput
            value={correo}
            onChangeText={setCorreo}
            style={styles.input}
            placeholder="Ingresar correo"
            placeholderTextColor="#999"
          />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed" size={20} color="#000" style={styles.icon} />
          <TextInput
            value={password}
            onChangeText={ setPassword}
            style={styles.input}
            secureTextEntry
            placeholder="Ingresar contraseña"
            placeholderTextColor="#999"
          />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed" size={20} color="#000" style={styles.icon} />
          <TextInput
            value={password2}
            onChangeText={setPassword2}
            style={styles.input}
            secureTextEntry
            placeholder="Confirmar contraseña"
            placeholderTextColor="#999"
          />
        </View>
        <View style={styles.policyContainer}>
          <RadioButton
            value= {checked}
            status={ checked === true ? 'checked' : 'unchecked' }
            onPress={() => setChecked(!checked)}
          />
          <Text style={{marginLeft:10}}>
            He leido y estoy de acuerdo Acuerdo de usuario versus Politica de Privacidad
          </Text>
        </View>
      </View>
      <Button mode='contained' onPress={handleRegister}>
        Obtener codigo de verificacion
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredContainer: {
    flex: 1,
    justifyContent: 'space-around', // Centrar verticalmente
    alignItems: 'center',      // Centrar horizontalmente
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container:{
    paddingHorizontal: 10,
    paddingVertical: 5, // Ajusta el tamaño del input
    width:'90%',
  },
  policyContainer:{
    flexDirection: 'row',
    marginTop:20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    backgroundColor:'transparent',
    marginBottom:15
  },
});

