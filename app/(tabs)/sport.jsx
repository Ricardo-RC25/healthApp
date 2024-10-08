import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView, LayoutAnimation, Platform, UIManager } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { router } from 'expo-router';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function Sport() {

  const navigateToStartSportScreen = () => {
    router.navigate('StartSportScreen');
  };

  const [selectedTab, setSelectedTab] = useState('Entrenamiento');
  const tabs = ['Correr', 'Aptitud', 'Cuerda', 'Natación', 'Ciclismo', 'Yoga', 'Senderismo', 'Entrenamiento en Circuito', 'Pilates', 'Artes Marciales'];

  const handleTabChange = (tab) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setSelectedTab(tab);
  };

  const renderContent = () => {
    return (
      <View style={styles.mainCard}>
        <View style={styles.weatherRow}>
          <Icon name="rainy-outline" size={30} color="#4caf50" />
          <Text style={styles.tempText}>21°C</Text>
          <Icon name="watch-outline" size={30} color="#ff5722" />
        </View>
        <Text style={styles.locationText}>Chimalhuacan</Text>
        <Text style={styles.rangeText}>16°C ~ 23°C</Text>
        <TouchableOpacity style={styles.playButton} onPress={navigateToStartSportScreen}>
          <Icon name="play-circle-outline" size={50} color="#fff" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.tabsWrapper}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tabsContainer}>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              style={selectedTab === tab ? styles.activeTab : styles.tab}
              onPress={() => handleTabChange(tab)}
            >
              <Text style={selectedTab === tab ? styles.activeTabText : styles.tabText}>{tab}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={styles.contentContainer}>
        {renderContent()}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  tabsWrapper: {
    height: 50, // Ajusta la altura según tus necesidades
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  tabsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#00BFA5',
    alignItems: 'center',
    width: 'auto',
  },
  tabText: {
    color: '#000',
    fontSize: 16,
    textAlign: 'center',
  },
  activeTabText: {
    color: '#00BFA5',
    fontSize: 16,
    textAlign: 'center',
  },
  contentContainer: {
    alignItems: 'center',
    marginTop: 5,
    width: '100%',
  },
  mainCard: {
    backgroundColor: '#e0f7fa',
    borderRadius: 20,
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
    width: Dimensions.get('window').width - 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  weatherRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tempText: {
    fontSize: 36,
    color: '#000',
    marginHorizontal: 10,
  },
  locationText: {
    fontSize: 18,
    color: '#000',
    marginVertical: 5,
  },
  rangeText: {
    fontSize: 14,
    color: '#000',
    marginBottom: 10,
  },
  playButton: {
    backgroundColor: '#00BFA5',
    borderRadius: 50,
    padding: 10,
  },
});
