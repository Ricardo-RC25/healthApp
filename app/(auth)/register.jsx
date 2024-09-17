import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, useTheme, Provider as PaperProvider, RadioButton } from 'react-native-paper';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from '@expo/vector-icons/Ionicons';
import { apiRegister } from '../../services/authApi';
import useAuthStore from '../../store/auth/authStore';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [checked, setChecked] = React.useState(false);
  const  addEmail  = useAuthStore(state => state.addEmail );
  
  const theme = useTheme();

  const handleRegister = async () => {
    // Aquí puedes agregar la lógica de registro
    
    
    if (email.length == 0) {
      Alert.alert('El correo no puede estar vacio');
      return
    }

    if (password.length == 0) {
      Alert.alert('La contraseña no puede estar vacia');
      return
    }

    if (password2.length == 0) {
      Alert.alert('La contraseña para confirmar no puede estar vacia');
      return
    }


    if (password != password2) {
      Alert.alert('Las contraseñas no coinciden');
      return
    }

    if (email) {
      
      try {
        const res = await apiRegister({email, password})

        if (res.status !== 201) {
          Alert.alert(res.data.message);
          return
        }

        addEmail(email)

        router.replace('validation')

      } catch (error) {
        Alert.alert(error);
      }

      // router.push('validation'); // Navegar a la aplicación principal
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
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            placeholder="Ingresar correo"
            placeholderTextColor="#999"
          />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed" size={20} color="#000" style={styles.icon} />
          <TextInput
            value={password}
            onChangeText={setPassword}
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
      <Button mode='contained' onPress={handleRegister} style={styles.customButton}>
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
  customButton: {
    borderRadius: 8,
    backgroundColor: '#3d0890',
  },
});
