import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, PanResponder, Animated, Dimensions, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { RadioButton } from 'react-native-paper';

const languages = [
  { id: '1', name: 'Español' },
  { id: '2', name: 'Inglés' },
  // Añadir más idiomas aquí si es necesario
];

export default function LanguagesScreen({ toggleModal }) {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const windowHeight = Dimensions.get('window').height;
  const [modalHeight, setModalHeight] = useState(windowHeight / 2);
  const [modalTop, setModalTop] = useState(windowHeight - windowHeight / 2);
  const pan = useRef(new Animated.Value(0)).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [null, { dy: pan }],
      { useNativeDriver: false }
    ),
    onPanResponderRelease: (e, gestureState) => {
      const newHeight = Math.min(windowHeight, Math.max(windowHeight / 4, modalHeight + gestureState.dy));
      const newTop = windowHeight - newHeight;
      setModalHeight(newHeight);
      setModalTop(newTop);
      pan.setValue(0);
    },
  });

  const handleSelectLanguage = (language) => {
    setSelectedLanguage(language);
    // Implementar la lógica para manejar la selección del idioma
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.languageOption} onPress={() => handleSelectLanguage(item.id)}>
      <View style={styles.radioContainer}>
        <RadioButton
          value={item.id}
          status={selectedLanguage === item.id ? 'checked' : 'unchecked'}
          onPress={() => handleSelectLanguage(item.id)}
        />
        <Text style={styles.languageText}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { height: modalHeight, top: modalTop }]}>
      <View style={styles.header}>
        <Text style={styles.modalTitle}>Selecciona un idioma</Text>
      </View>
      <FlatList
        data={languages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.languageList}
      />
      <Animated.View
        style={[styles.resizer, { transform: [{ translateY: pan }] }]}
        {...panResponder.panHandlers}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  header: {
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    flex: 1,
    margin: 15,
  },
  languageList: {
    width: '100%',
  },
  languageOption: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  languageText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
  resizer: {
    position: 'absolute',
    margin: 10,
    left: '50%',
    marginLeft: -25,
    width: 50,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 2.5,
  },
});
