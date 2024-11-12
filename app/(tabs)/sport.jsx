import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView, LayoutAnimation, Platform, UIManager, useColorScheme } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { router } from 'expo-router';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function Sport() {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

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
      <View style={[styles.mainCard, { backgroundColor: isDarkMode ? '#1e1e1e' : '#e0f7fa' }]}>
        <View style={styles.weatherRow}>
          <Icon name="rainy-outline" size={30} color="#4caf50" />
          <Text style={[styles.tempText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>21°C</Text>
          <Icon name="watch-outline" size={30} color="#ff5722" />
        </View>
        <Text style={[styles.locationText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Chimalhuacan</Text>
        <Text style={[styles.rangeText, { color: isDarkMode ? 'lightgrey' : '#000000' }]}>16°C ~ 23°C</Text>
        <TouchableOpacity style={[styles.playButton, { backgroundColor: isDarkMode ? '#00BFA5' : '#00BFA5' }]} onPress={navigateToStartSportScreen}>
          <Icon name="play-circle-outline" size={50} color="#ffffff" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#ffffff' }]}>
      <View style={[styles.tabsWrapper, { backgroundColor: isDarkMode ? '#000000' : '#ffffff' }]}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tabsContainer}>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              style={selectedTab === tab ? [styles.activeTab, { borderBottomColor: isDarkMode ? '#00BFA5' : '#00BFA5' }] : styles.tab}
              onPress={() => handleTabChange(tab)}
            >
              <Text style={selectedTab === tab ? [styles.activeTabText, { color: isDarkMode ? '#00BFA5' : '#00BFA5' }] : [styles.tabText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>{tab}</Text>
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
    flexGrow: 1,
  },
  tabsWrapper: {
    height: 50,
    marginBottom: 1,
    marginTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    marginHorizontal: -16,
    paddingHorizontal: 16,
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
    alignItems: 'center',
    width: 'auto',
  },
  tabText: {
    fontSize: 16,
    textAlign: 'center',
  },
  activeTabText: {
    fontSize: 16,
    textAlign: 'center',
  },
  contentContainer: {
    alignItems: 'center',
    marginTop: 5,
    width: '100%',
    paddingHorizontal: 16,
  },
  mainCard: {
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
    marginHorizontal: 10,
  },
  locationText: {
    fontSize: 18,
    marginVertical: 5,
  },
  rangeText: {
    fontSize: 14,
    marginBottom: 10,
  },
  playButton: {
    borderRadius: 50,
    padding: 10,
  },
});