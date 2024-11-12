import React, { useState, useCallback } from 'react';
import Modal from 'react-native-modal';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, BackHandler, useColorScheme } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { router } from 'expo-router';
import ThemeScreen from './ThemeScreen';
import { debounce } from 'lodash';
import { useFocusEffect } from '@react-navigation/native';

export default function DeviceScreen() {
  const [isModalVisible, setModalVisible] = useState(false);
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  // Función para alternar el modal con debounce para evitar múltiples clics
  const toggleModal = useCallback(
    debounce(() => {
      setModalVisible((prev) => !prev);
    }, 300),
    []
  );

  // Cierra el modal si el usuario presiona el botón de regreso
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (isModalVisible) {
          setModalVisible(false);
          return true;
        }
        return false;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [isModalVisible])
  );

  const navigateToHealthSettingsScreen = () => {
    router.navigate('HealthSettingsScreen');
  };

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#ffffff' }]}>
      <View style={styles.deviceInfo}>
        <Icon name="watch-outline" size={50} color={isDarkMode ? '#888888' : '#aaa'} />
        <Text style={[styles.deviceName, { color: isDarkMode ? '#ffffff' : '#000000' }]}>E88E89 BDA7</Text>
        <View style={styles.batteryContainer}>
          <Icon name="battery-half-outline" size={20} color="#4CAF50" />
          <Text style={[styles.batteryText, { color: isDarkMode ? '#4CAF50' : '#4CAF50' }]}>71%</Text>
        </View>
      </View>

      <TouchableOpacity style={[styles.option, { backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff' }]} onPress={toggleModal}>
        <Text style={[styles.optionText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Tema</Text>
        <Icon name="chevron-forward-outline" size={25} color={isDarkMode ? '#ffffff' : '#000000'} style={styles.optionIcon} />
      </TouchableOpacity>

      <TouchableOpacity style={[styles.option, { backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff' }]} onPress={navigateToHealthSettingsScreen}>
        <Text style={[styles.optionText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Configuración de salud</Text>
        <Icon name="chevron-forward-outline" size={25} color={isDarkMode ? '#ffffff' : '#000000'} style={styles.optionIcon} />
      </TouchableOpacity>

      <TouchableOpacity style={[styles.option, { backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff' }]}>
        <Text style={[styles.optionText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Configuración anti-pérdida</Text>
        <Icon name="chevron-forward-outline" size={25} color={isDarkMode ? '#ffffff' : '#000000'} style={styles.optionIcon} />
      </TouchableOpacity>

      <TouchableOpacity style={[styles.option, { backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff' }]}>
        <Text style={[styles.optionText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Empuje de información</Text>
        <Icon name="chevron-forward-outline" size={25} color={isDarkMode ? '#ffffff' : '#000000'} style={styles.optionIcon} />
      </TouchableOpacity>

      <TouchableOpacity style={[styles.option, { backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff' }]}>
        <Text style={[styles.optionText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Preparar</Text>
        <Icon name="chevron-forward-outline" size={25} color={isDarkMode ? '#ffffff' : '#000000'} style={styles.optionIcon} />
      </TouchableOpacity>

      <TouchableOpacity style={[styles.option, { backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff' }]}>
        <Text style={[styles.optionText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Acerca de este dispositivo</Text>
        <Icon name="chevron-forward-outline" size={25} color={isDarkMode ? '#ffffff' : '#000000'} style={styles.optionIcon} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.disconnectButton}>
        <Text style={styles.disconnectText}>Desconectar Dispositivo</Text>
      </TouchableOpacity>

      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        onSwipeComplete={toggleModal}
        onBackButtonPress={toggleModal}
        swipeDirection="down"
        style={styles.modal}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationInTiming={300}
        animationOutTiming={300}
        useNativeDriverForBackdrop={true}
      >
        <ThemeScreen toggleModal={toggleModal} />
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  deviceInfo: {
    alignItems: 'center',
    marginBottom: 30,
  },
  deviceName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  batteryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  batteryText: {
    marginLeft: 5,
    fontSize: 16,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
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
  optionIcon: {
    marginLeft: 'auto',
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
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});