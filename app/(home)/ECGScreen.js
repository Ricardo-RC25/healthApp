import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, useColorScheme } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { router } from 'expo-router';

export default function ECGScreen() {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  return (
    <ScrollView
      contentContainerStyle={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#ffffff' }]}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <View style={[styles.ecgContainer, { backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff' }]}>
        <View style={[styles.ecgGraph, { backgroundColor: isDarkMode ? '#333333' : '#e9ecef' }]}>
          <Text style={[styles.ecgPlaceholderText, { color: isDarkMode ? '#888888' : '#6c757d' }]}>ECG Graph Placeholder</Text>
        </View>
        <View style={styles.ecgInfo}>
          <View style={styles.infoBlock}>
            <Text style={[styles.infoText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>--</Text>
            <Text style={[styles.infoLabel, { color: isDarkMode ? '#888888' : '#6c757d' }]}>bpm</Text>
          </View>
          <View style={styles.infoBlock}>
            <Text style={[styles.infoText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>--/--</Text>
            <Text style={[styles.infoLabel, { color: isDarkMode ? '#888888' : '#6c757d' }]}>mmHg</Text>
          </View>
          <View style={styles.infoBlock}>
            <Text style={[styles.infoText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>--</Text>
            <Text style={[styles.infoLabel, { color: isDarkMode ? '#888888' : '#6c757d' }]}>HRV</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={[styles.menuItem, { backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff' }]}>
        <Icon name="bar-chart-outline" size={25} color={isDarkMode ? '#ffffff' : '#000000'} />
        <Text style={[styles.menuText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Análisis de electrocardiograma</Text>
        <Icon name="chevron-forward-outline" size={25} color={isDarkMode ? '#ffffff' : '#000000'} style={styles.menuIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.menuItem, { backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff' }]} onPress={() => router.navigate('KnowledgeColumn')}>
        <Icon name="book-outline" size={25} color={isDarkMode ? '#ffffff' : '#000000'} />
        <Text style={[styles.menuText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Columna de conocimiento</Text>
        <Icon name="chevron-forward-outline" size={25} color={isDarkMode ? '#ffffff' : '#000000'} style={styles.menuIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.menuItem, { backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff' }]} onPress={() => router.navigate('TrendTracking')}>
        <Icon name="trending-up-outline" size={25} color={isDarkMode ? '#ffffff' : '#000000'} />
        <Text style={[styles.menuText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Seguimiento de tendencias</Text>
        <Icon name="chevron-forward-outline" size={25} color={isDarkMode ? '#ffffff' : '#000000'} style={styles.menuIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.menuItem, { backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff' }]} onPress={() => router.navigate('SynchronousData')}>
        <Icon name="sync-outline" size={25} color={isDarkMode ? '#ffffff' : '#000000'} />
        <Text style={[styles.menuText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Datos síncronos</Text>
        <Icon name="chevron-forward-outline" size={25} color={isDarkMode ? '#ffffff' : '#000000'} style={styles.menuIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.menuItem, { backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff' }]} onPress={() => router.navigate('HistoryLog')}>
        <Icon name="document-text-outline" size={25} color={isDarkMode ? '#ffffff' : '#000000'} />
        <Text style={[styles.menuText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Registro de la historia</Text>
        <Icon name="chevron-forward-outline" size={25} color={isDarkMode ? '#ffffff' : '#000000'} style={styles.menuIcon} />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexGrow: 1,
  },
  ecgContainer: {
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 10,
  },
  ecgGraph: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
  },
  ecgPlaceholderText: {
    fontSize: 16,
  },
  ecgInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  infoBlock: {
    alignItems: 'center',
  },
  infoText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  infoLabel: {
    fontSize: 14,
  },
  menuItem: {
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
  menuText: {
    marginLeft: 10,
    fontSize: 16,
    flex: 1,
  },
  menuIcon: {
    marginLeft: 'auto',
  },
});

