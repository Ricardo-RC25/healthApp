import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import useAuthStore from '../../store/auth/authStore';
import { router } from 'expo-router';

export default function SecurityScreen() {

  const logout = useAuthStore(state => state.logout);

  const handleLogOut = (e) =>{
    logout()
    // router.replace('/login')
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Restablecer la contraseña</Text>
        <Icon name="chevron-forward-outline" size={20} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Configuración de permisos</Text>
        <Icon name="chevron-forward-outline" size={20} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.deleteButton}>
        <Text style={styles.deleteText}>Borrar Cuenta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.disconnectButton} onPress={handleLogOut}>
        <Text style={styles.disconnectText}>Serrar Sesión</Text>
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
    borderBottomColor: '#e0e0e0',
    backgroundColor: '#fff',
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
    color: '#000',
    flex: 1,
  },
  optionDetail: {
    fontSize: 14,
    color: '#888',
  },
  optionIcon: {
    marginLeft: 'auto',
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
    color: '#fff',
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
    color: '#fff',
  },
});

