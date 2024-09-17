import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, useTheme, Provider as PaperProvider } from 'react-native-paper';
import { router } from 'expo-router';
import useAuthStore from '../../store/auth/authStore';

export default function Validation() {
    const [code, setCode] = useState(['', '', '', '', '', '']);
    const email = useAuthStore(state => state.email)
    const inputRefs = useRef([]);
    

    const handleChangeText = (text, index) => {
        const newCode = [...code];
        newCode[index] = text;

        if (text && index < 5) {
        inputRefs.current[index + 1].focus();
        }

        setCode(newCode);
    };

    const handleKeyPress = (e, index) => {
        if (e.nativeEvent.key === 'Backspace' && index > 0 && !code[index]) {
          inputRefs.current[index - 1].focus();
        }
    };

    const handleRegister = async () => {
        if (code.every((digit) => digit !== '')) {
            // Aquí haces la verificación con el código completo
            const verificationCode = code.join('');
            Alert.alert('Código completo', `El código es: ${verificationCode}`);
            router.navigate('home')
          } else {
            Alert.alert('Error', 'Por favor, complete todos los campos.');
          }
    };

  return (
    <View style={styles.container}>
        <View>
            <Text>
                Ingrese el codigo de verificacion
            </Text>
            <Text>
                El codigo de verificacion ha sido envidado a correo {email}
            </Text>
            <View style={styles.containerValidation}>
                {code.map((digit, index) => (
                    <TextInput
                    key={index}
                    ref={(ref) => (inputRefs.current[index] = ref)}
                    style={styles.input}
                    value={digit}
                    onChangeText={(text) => handleChangeText(text, index)}
                    onKeyPress={(e) => handleKeyPress(e, index)}
                    inputMode="default" // Cambiar a 'numeric' para solo números
                    maxLength={1}
                    textAlign="center"
                    />
                ))}
            </View>
        </View>
        <View style={styles.containerButton}>
            <Button contentStyle={{width:'100%'}} onPress={handleRegister} mode='contained'>Verificar</Button>
            <Text style={{textAlign:'center', marginTop:10}}>No se puedo obtener el codigo de verificacion</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'space-around',
        alignItems:'center',
        height:'100%',
        width:'100%'
    },
    containerValidation: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width:'100%',
      marginTop:20
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      backgroundColor:'transparent',
      width: 40,
      height: 40,
      fontSize: 18,
      padding:0
    },
    containerButton:{
        width:'90%',
    }
  });
