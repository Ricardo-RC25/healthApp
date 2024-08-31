import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Alert, KeyboardAvoidingView, Keyboard, Platform, Dimensions } from 'react-native';
import { TextInput, Button, Switch, TouchableRipple, useTheme, Provider as PaperProvider } from 'react-native-paper';
import * as LocalAuthentication from 'expo-local-authentication';
import Icon from 'react-native-vector-icons/Ionicons';
import { router } from 'expo-router'
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';
import useAuthStore from '../../store/auth/authStore';

const { width } = Dimensions.get('window');

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const keyboardVisible = useSharedValue(false);
  const theme = useTheme();
  const login = useAuthStore(state => state.login);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      keyboardVisible.value = true;
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      keyboardVisible.value = false;
    });

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(keyboardVisible.value ? 150 : 300, {
        duration: 300,
        easing: Easing.inOut(Easing.ease),
      }),
    };
  });

  const handleBiometricAuth = async () => {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    if (!hasHardware) {
      Alert.alert('Dispositivo no soportado', 'Este dispositivo no soporta autenticación biométrica');
      return;
    }

    const isEnrolled = await LocalAuthentication.isEnrolledAsync();
    if (!isEnrolled) {
      Alert.alert('Sin datos biométricos', 'Este dispositivo no tiene datos biométricos guardados');
      return;
    }

    const result = await LocalAuthentication.authenticateAsync();
    if (result.success) {
      Alert.alert('Autenticación exitosa', '¡Bienvenido/a!');
      router.replace('home');
    } else {
      Alert.alert('Autenticación fallida', 'No se pudo autenticar mediante huella digital');
    }
  };

  const handleLogin = () => {
    if (username === 'user' && password === 'password') {
      login({nombre: 'ronaldo'})
      router.replace('(tabs)');
    } else {
      Alert.alert('Credenciales incorrectas');
    }
  };

  return (
    <PaperProvider>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.container}>
          <Animated.View style={[styles.imageWrapper, imageAnimatedStyle]}>
            <Image
              source={require('../../assets/imagen/doctores.png')}
              style={styles.logo}
              onLoad={() => console.log('Image loaded')}
              onError={() => console.log('Error loading image')}
            />
          </Animated.View>
          <View style={styles.formContainer}>
            <Text style={styles.greeting}>¡Bienvenido!</Text>
            <TouchableRipple onPress={() => {}} style={styles.changeAccount}>
              <Text style={styles.changeAccountText}>Cambiar cuenta</Text>
            </TouchableRipple>

            <TextInput
              label="Nombre de usuario"
              mode="outlined"
              value={username}
              onChangeText={setUsername}
              style={styles.input}
              theme={{ colors: { primary: '#3d0890' } }}
            />

            <TextInput
              label="Contraseña"
              mode="outlined"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
              style={styles.input}
              theme={{ colors: { primary: '#3d0890' } }}
            />

            <View style={styles.switchContainer}>
              <Switch
                value={showPassword}
                onValueChange={setShowPassword}
                color="#3d0890"
              />
              <Text style={styles.switchLabel}>Mostrar contraseña</Text>
            </View>

            <Button mode="contained" onPress={handleLogin} style={styles.loginButton} buttonColor="#3d0890">
              Ingresar
            </Button>

            <TouchableRipple onPress={() => {}} style={styles.forgotPassword}>
              <Text style={styles.forgotPasswordText}>
                ¿Olvidaste tu contraseña? <Text style={styles.recoverText}>Recuperar</Text>
              </Text>
            </TouchableRipple>

            <TouchableRipple onPress={handleBiometricAuth} style={styles.fingerprintButton}>
              <View style={styles.fingerprintContainer}>
                <Icon name="finger-print" size={24} color="#3d0890" style={styles.fingerprintIcon} />
                <Text style={styles.fingerprintText}>Usar huella digital</Text>
              </View>
            </TouchableRipple>
          </View>
        </View>
      </KeyboardAvoidingView>
    </PaperProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageWrapper: {
    width: '100%',
    overflow: 'hidden',
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  formContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  changeAccount: {
    marginBottom: 24,
  },
  changeAccountText: {
    color: '#3d0890',
    textDecorationLine: 'underline',
  },
  input: {
    width: '100%',
    marginBottom: 16,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  switchLabel: {
    marginLeft: 8,
    color: '#333',
  },
  loginButton: {
    width: '100%',
    marginBottom: 24,
    paddingVertical: 8,
    borderRadius: 8,
  },
  forgotPassword: {
    marginBottom: 24,
  },
  forgotPasswordText: {
    color: '#333',
  },
  recoverText: {
    color: '#3d0890',
    textDecorationLine: 'underline',
  },
  fingerprintButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fingerprintContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fingerprintIcon: {
    marginRight: 8,
  },
  fingerprintText: {
    color: '#3d0890',
    fontSize: 16,
  },
});
