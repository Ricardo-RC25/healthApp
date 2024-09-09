import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Animated, PanResponder, FlatList } from 'react-native';
import { RadioButton } from 'react-native-paper';

const themes = [
  { id: '1', name: 'Tema 1' },
  { id: '2', name: 'Tema 2' },
  // Añadir más temas aquí si es necesario
];

export default function ThemeScreen({ toggleModal }) {
  const [selectedTheme, setSelectedTheme] = useState(null);
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

  const handleSelectTheme = (theme) => {
    setSelectedTheme(theme);
    // Implementar la lógica para manejar la selección del tema
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.themeOption} onPress={() => handleSelectTheme(item.id)}>
      <View style={styles.radioContainer}>
        <RadioButton
          value={item.id}
          status={selectedTheme === item.id ? 'checked' : 'unchecked'}
          onPress={() => handleSelectTheme(item.id)}
        />
        <Text style={styles.themeText}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { height: modalHeight, top: modalTop }]}>
      <View style={styles.header}>
        <Text style={styles.modalTitle}>Selecciona un tema</Text>
      </View>
      <FlatList
        data={themes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.themeList}
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
  themeList: {
    width: '100%',
  },
  themeOption: {
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
  themeText: {
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
