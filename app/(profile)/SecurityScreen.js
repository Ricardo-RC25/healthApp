import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import useAuthStore from '../../store/auth/authStore';
import { router } from 'expo-router';
import { useColorScheme } from 'react-native';

export default function SecurityScreen() {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const logout = useAuthStore(state => state.logout);

  const handleLogOut = () => {
    logout();
    // router.replace('/login')
  };

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#ffffff' }]}>
      <TouchableOpacity style={[styles.option, { backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff' }]}>
        <Text style={[styles.optionText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Restablecer la contraseña</Text>
        <Icon name="chevron-forward-outline" size={20} color={isDarkMode ? '#ffffff' : '#000000'} />
      </TouchableOpacity>

      <TouchableOpacity style={[styles.option, { backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff' }]}>
        <Text style={[styles.optionText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Configuración de permisos</Text>
        <Icon name="chevron-forward-outline" size={20} color={isDarkMode ? '#ffffff' : '#000000'} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.deleteButton}>
        <Text style={styles.deleteText}>Borrar Cuenta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.disconnectButton} onPress={handleLogOut}>
        <Text style={styles.disconnectText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ffff', 
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  optionText: {
    marginLeft: 10,
    fontSize: 16,
    flex: 1,
  },
  deleteButton: {
    marginTop: 30,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#da1b08',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  deleteText: {
    fontSize: 16,
    color: '#ffffff',
  },
  disconnectButton: {
    marginTop: 30,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#da1b08',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  disconnectText: {
    fontSize: 16,
    color: '#ffffff',
  },
});