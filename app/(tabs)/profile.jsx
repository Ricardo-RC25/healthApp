import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import LanguagesScreen from '../(profile)/LanguagesScreen';
import { router } from 'expo-router';
import useAuthStore from '../../store/auth/authStore';

export default function ProfileScreen() {
  const [isModalVisible, setModalVisible] = useState(false);
  const user = useAuthStore(state => state.user);
  

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const navigateToDeviceScreen = () => {
    router.navigate('DeviceScreen');
  };

  const navigateToStorageScreen = () => {
    router.navigate('StorageScreen');
  };

  const navigateToSecurityScreen = () => {
    router.navigate('SecurityScreen');
  };

  const navigateToHelpScreen = () => {
    router.navigate('HelpScreen');
  };

  const navigateToAboutUsScreen = () => {
    router.navigate('AboutUsScreen');
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>{user.nombre}</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.option} onPress={navigateToDeviceScreen}>
          <Text style={styles.optionText}>Mi dispositivo</Text>
          <Icon name="chevron-forward-outline" size={25} color="#000" style={styles.optionIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Borrar caché</Text>
          <Text style={styles.optionDetail}>1.08MB</Text>
          <Icon style={styles.optionIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={navigateToSecurityScreen}>
          <Text style={styles.optionText}>Configuraciones de seguridad</Text>
          <Icon name="chevron-forward-outline" size={25} color="#000" style={styles.optionIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={navigateToHelpScreen}>
          <Text style={styles.optionText}>Ayuda</Text>
          <Icon name="chevron-forward-outline" size={25} color="#000" style={styles.optionIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={toggleModal}>
          <Text style={styles.optionText}>Idiomas</Text>
          <Icon name="chevron-forward-outline" size={25} color="#000" style={styles.optionIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Sobre nosotros</Text>
          <Text style={styles.optionDetail}>1.27.74</Text>
          <Icon style={styles.optionIcon} />
        </TouchableOpacity>
      </View>
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
        <LanguagesScreen toggleModal={toggleModal} />
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileName: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
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
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});
