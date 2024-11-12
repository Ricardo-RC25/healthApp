import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, BackHandler, useColorScheme } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import LanguagesScreen from '../(profile)/LanguagesScreen';
import { router } from 'expo-router';
import useAuthStore from '../../store/auth/authStore';
import { useFocusEffect } from '@react-navigation/native';

export default function ProfileScreen() {
  const [isModalVisible, setModalVisible] = useState(false);
  const user = useAuthStore(state => state.user);
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

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

  const navigateToDeviceScreen = () => {
    router.push('DeviceScreen');
  };

  const navigateToStorageScreen = () => {
    router.push('StorageScreen');
  };

  const navigateToSecurityScreen = () => {
    router.push('SecurityScreen');
  };

  const navigateToHelpScreen = () => {
    router.push('HelpScreen');
  };

  const navigateToAboutUsScreen = () => {
    router.push('AboutUsScreen');
  };

  return (
    <ScrollView
      contentContainerStyle={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#ffffff' }]}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Image
          source={require('../../assets/imagen/user.png')}
          style={styles.profileImage}
        />
        <Text style={[styles.profileName, { color: isDarkMode ? '#ffffff' : '#000000' }]}>{user.name}</Text>
      </View>
      <View>
        <TouchableOpacity style={[styles.option, { backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff' }]} onPress={navigateToDeviceScreen}>
          <Text style={[styles.optionText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Mi Dispositivo</Text>
          <Icon name="chevron-forward-outline" size={25} color={isDarkMode ? '#ffffff' : '#000000'} style={styles.optionIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.option, { backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff' }]}>
          <Text style={[styles.optionText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Borrar caché</Text>
          <Text style={[styles.optionDetail, { color: isDarkMode ? 'lightgrey' : '#888' }]}>1.08MB</Text>
          <Icon name="chevron-forward-outline" size={25} color={isDarkMode ? '#ffffff' : '#000000'} style={styles.optionIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.option, { backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff' }]} onPress={navigateToSecurityScreen}>
          <Text style={[styles.optionText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Seguridad</Text>
          <Icon name="chevron-forward-outline" size={25} color={isDarkMode ? '#ffffff' : '#000000'} style={styles.optionIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.option, { backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff' }]} onPress={navigateToHelpScreen}>
          <Text style={[styles.optionText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Ayuda</Text>
          <Icon name="chevron-forward-outline" size={25} color={isDarkMode ? '#ffffff' : '#000000'} style={styles.optionIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.option, { backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff' }]} onPress={toggleModal}>
          <Text style={[styles.optionText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Idiomas</Text>
          <Icon name="chevron-forward-outline" size={25} color={isDarkMode ? '#ffffff' : '#000000'} style={styles.optionIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.option, { backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff' }]} onPress={navigateToAboutUsScreen}>
          <Text style={[styles.optionText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Sobre nosotros</Text>
          <Text style={[styles.optionDetail, { color: isDarkMode ? 'lightgrey' : '#888' }]}>1.27.74</Text>
          <Icon name="chevron-forward-outline" size={25} color={isDarkMode ? '#ffffff' : '#000000'} style={styles.optionIcon} />
        </TouchableOpacity>
      </View>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        onSwipeComplete={toggleModal}
        swipeDirection="down"
        onBackButtonPress={toggleModal}
        style={styles.modal}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationInTiming={300} 
        animationOutTiming={300} 
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
  optionDetail: {
    fontSize: 14,
  },
  optionIcon: {
    marginLeft: 'auto',
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});
