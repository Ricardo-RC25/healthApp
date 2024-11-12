import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useColorScheme } from 'react-native';

export default function StorageScreen() {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#ffffff' }]}>
      <Text style={[styles.title, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Almacenamiento</Text>
      <TouchableOpacity style={[styles.option, { backgroundColor: isDarkMode ? '#1e1e1e' : '#f5f5f5' }]}>
        <Text style={[styles.optionText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Administrar Almacenamiento</Text>
        <Icon name="chevron-forward-outline" size={20} color={isDarkMode ? '#ffffff' : '#000000'} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginVertical: 10,
  },
  optionText: {
    fontSize: 16,
    flex: 1,
  },
});
