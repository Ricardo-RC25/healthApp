import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { router } from 'expo-router';

export default function ECGScreen() {

  return (
    <ScrollView 
      contentContainerStyle={styles.container} 
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.ecgContainer}>
        <View style={styles.ecgGraph}>
          <Text style={styles.ecgPlaceholderText}>ECG Graph Placeholder</Text>
        </View>
        <View style={styles.ecgInfo}>
          <View style={styles.infoBlock}>
            <Text style={styles.infoText}>--</Text>
            <Text style={styles.infoLabel}>bpm</Text>
          </View>
          <View style={styles.infoBlock}>
            <Text style={styles.infoText}>--/--</Text>
            <Text style={styles.infoLabel}>mmHg</Text>
          </View>
          <View style={styles.infoBlock}>
            <Text style={styles.infoText}>--</Text>
            <Text style={styles.infoLabel}>HRV</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Medición de Electrocardiograma</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => router.navigate('ECGAnalysis')}>
        <Icon name="bar-chart-outline" size={25} color="#000" />
        <Text style={styles.menuText}>análisis de electrocardiograma</Text>
        <Icon name="chevron-forward-outline" size={25} color="#000" style={styles.menuIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => router.navigate('KnowledgeColumn')}>
        <Icon name="book-outline" size={25} color="#000" />
        <Text style={styles.menuText}>columna de conocimiento</Text>
        <Icon name="chevron-forward-outline" size={25} color="#000" style={styles.menuIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => router.navigate('TrendTracking')}>
        <Icon name="trending-up-outline" size={25} color="#000" />
        <Text style={styles.menuText}>Seguimiento de tendencias</Text>
        <Icon name="chevron-forward-outline" size={25} color="#000" style={styles.menuIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => router.navigate('SynchronousData')}>
        <Icon name="sync-outline" size={25} color="#000" />
        <Text style={styles.menuText}>Datos síncronos</Text>
        <Icon name="chevron-forward-outline" size={25} color="#000" style={styles.menuIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => router.navigate('HistoryLog')}>
        <Icon name="document-text-outline" size={25} color="#000" />
        <Text style={styles.menuText}>registro de la historia</Text>
        <Icon name="chevron-forward-outline" size={25} color="#000" style={styles.menuIcon} />
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
    backgroundColor: '#fff',
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
    backgroundColor: '#e9ecef',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
  },
  ecgPlaceholderText: {
    color: '#6c757d',
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
    color: '#000',
  },
  infoLabel: {
    fontSize: 14,
    color: '#6c757d',
  },
  button: {
    backgroundColor: '#17a2b8',
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: '#fff',
    marginVertical: 5,
    borderRadius: 10,
  },
  menuText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#000',
    flex: 1,
  },
  menuIcon: {
    marginLeft: 'auto',
  },
});
