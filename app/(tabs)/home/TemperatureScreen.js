import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { router } from 'expo-router';

export default function TemperatureScreen() {
  const [selectedTab, setSelectedTab] = useState('Día');

  const renderContent = () => {
    switch (selectedTab) {
      case 'Mes':
        return <Text style={styles.contentText}>Contenido del Mes</Text>;
      case 'Semana':
        return <Text style={styles.contentText}>Contenido de la Semana</Text>;
      case 'Día':
        return <Text style={styles.contentText}>Contenido del Día</Text>;
      default:
        return null;
    }
  };

  return (
    <ScrollView 
      contentContainerStyle={styles.container} 
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.temperatureContainer}>
        <View style={styles.tabsContainer}>
          <TouchableOpacity style={selectedTab === 'Mes' ? styles.activeTab : styles.tab} onPress={() => setSelectedTab('Mes')}>
            <Text style={selectedTab === 'Mes' ? styles.activeTabText : styles.tabText}>Mes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={selectedTab === 'Semana' ? styles.activeTab : styles.tab} onPress={() => setSelectedTab('Semana')}>
            <Text style={selectedTab === 'Semana' ? styles.activeTabText : styles.tabText}>Semana</Text>
          </TouchableOpacity>
          <TouchableOpacity style={selectedTab === 'Día' ? styles.activeTab : styles.tab} onPress={() => setSelectedTab('Día')}>
            <Text style={selectedTab === 'Día' ? styles.activeTabText : styles.tabText}>Día</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contentContainer}>
          {renderContent()}
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Medición de la Temperatura</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => router.navigate('TemperatureAnalysis')}>
        <Icon name="analytics-outline" size={25} color="#000" />
        <Text style={styles.menuText}>Análisis de la Temperatura</Text>
        <Icon name="chevron-forward-outline" size={25} color="#000" style={styles.menuIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => router.navigate('HealthSettings')}>
        <Icon name="settings-outline" size={25} color="#000" />
        <Text style={styles.menuText}>Configuraciones de salud</Text>
        <Icon name="chevron-forward-outline" size={25} color="#000" style={styles.menuIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => router.navigate('KnowledgeColumn')}>
        <Icon name="book-outline" size={25} color="#000" />
        <Text style={styles.menuText}>Columna de conocimiento</Text>
        <Icon name="chevron-forward-outline" size={25} color="#000" style={styles.menuIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => router.navigate('HistoryLog')}>
        <Icon name="document-text-outline" size={25} color="#000" />
        <Text style={styles.menuText}>Registro de la historia</Text>
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
  temperatureContainer: {
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
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  tab: {
    padding: 10,
  },
  activeTab: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#00BFA5',
  },
  tabText: {
    color: '#000',
  },
  activeTabText: {
    color: '#00BFA5',
  },
  contentContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  contentText: {
    fontSize: 18,
    color: '#000',
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
