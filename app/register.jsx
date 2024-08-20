import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, Button, useTheme, Provider as PaperProvider } from 'react-native-paper';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RegisterScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const theme = useTheme();

  const handleRegister = async () => {
    // Aquí puedes agregar la lógica de registro
    if (username && password) {
      await AsyncStorage.setItem('userToken', 'some-auth-token'); // Guardar el token de autenticación
      router.replace('BottomTabNavigator'); // Navegar a la aplicación principal
    } else {
      Alert.alert('Registro fallido', 'Por favor, ingresa un nombre de usuario y una contraseña válidos.');
    }
  };

  return (
    <PaperProvider>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.container}>
          <Text style={styles.greeting}>¡Regístrate!</Text>

          <TextInput
            label="Nombre de usuario"
            mode="outlined"
            value={username}
            onChangeText={setUsername}
            style={styles.input}
            theme={{ colors: { primary: theme.colors.primary } }}
          />

          <TextInput
            label="Contraseña"
            mode="outlined"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            theme={{ colors: { primary: theme.colors.primary } }}
          />

          <Button mode="contained" onPress={handleRegister} style={styles.registerButton}>
            Registrarse
          </Button>
        </View>
      </KeyboardAvoidingView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  input: {
    width: '100%',
    marginBottom: 16,
    elevation: 4,
  },
  registerButton: {
    width: '100%',
    paddingVertical: 8,
    borderRadius: 10,
    elevation: 4,
  },
});
