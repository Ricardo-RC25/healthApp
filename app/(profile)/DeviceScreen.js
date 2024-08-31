import React, { useState, useCallback } from 'react';
import Modal from 'react-native-modal';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { router } from 'expo-router';
import ThemeScreen from './ThemeScreen';
import { debounce } from 'lodash'; 

export default function DeviceScreen() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = useCallback(debounce(() => {
    setModalVisible(prev => !prev);
  }, 300), []);

  const navigateToHealthSettingsScreen = () => {
    router.navigate('HealthSettingsScreen');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.deviceInfo}>
        <Icon name="watch-outline" size={50} color="#aaa" />
        <Text style={styles.deviceName}>E88E89 BDA7</Text>
        <View style={styles.batteryContainer}>
          <Icon name="battery-half-outline" size={20} color="#4CAF50" />
          <Text style={styles.batteryText}>71%</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.option} onPress={toggleModal}>
        <Text style={styles.optionText}>Tema</Text>
        <Icon name="chevron-forward-outline" size={25} color="#000" style={styles.optionIcon} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={navigateToHealthSettingsScreen}>
        <Text style={styles.optionText}>Configuraciones de salud</Text>
        <Icon name="chevron-forward-outline" size={25} color="#000" style={styles.optionIcon} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Configuración anti-pérdida</Text>
        <Icon name="chevron-forward-outline" size={25} color="#000" style={styles.optionIcon} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Empuje de información</Text>
        <Icon name="chevron-forward-outline" size={25} color="#000" style={styles.optionIcon} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Preparar</Text>
        <Icon name="chevron-forward-outline" size={25} color="#000" style={styles.optionIcon} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Acerca de este dispositivo</Text>
        <Icon name="chevron-forward-outline" size={25} color="#000" style={styles.optionIcon} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.disconnectButton}>
        <Text style={styles.disconnectText}>Desconectar Dispositivo</Text>
      </TouchableOpacity>

      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        onSwipeComplete={toggleModal}
        swipeDirection="down"
        style={styles.modal}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationInTiming={300}  // Acelerando la animación de apertura
        animationOutTiming={300} // Acelerando la animación de cierre
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
    color: '#4CAF50',
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
    color: '#fff',
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});
