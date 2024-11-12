import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useColorScheme } from 'react-native';

export default function AboutUsScreen() {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#ffffff' }]}>
      <Text style={[styles.title, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Sobre Nosotros</Text>
      <Text style={[styles.description, { color: isDarkMode ? '#b0bec5' : '#333333' }]}>
        Bienvenido a nuestra aplicación. Nos dedicamos a mejorar su experiencia y salud a través de tecnología innovadora.
      </Text>
      <TouchableOpacity style={[styles.contactButton, { backgroundColor: isDarkMode ? '#1e1e1e' : '#f5f5f5' }]}>
        <Icon name="mail-outline" size={20} color={isDarkMode ? '#ffffff' : '#000000'} />
        <Text style={[styles.contactButtonText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Contáctanos</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  contactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  contactButtonText: {
    fontSize: 16,
    marginLeft: 8,
  },
});
