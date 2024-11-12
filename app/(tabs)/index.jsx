import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, useColorScheme } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { router } from 'expo-router';

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const navigateToStepsScreen = () => {
    router.navigate('StepsScreen');
  };

  const navigateToClassificationScreen = () => {
    router.navigate('ClassificationScreen');
  };
  
  const navigateToBoardScreen = () => {
    router.navigate('BoardScreen');
  };

  const navigateToHeartECGScreen = () => {
    router.navigate('ECGScreen');
  };

  const navigateToSleepScreen = () => {
    router.navigate('SleepScreen');
  };

  const navigateToHeartRateScreen = () => {
    router.navigate('HeartRateScreen');
  };

  const navigateToBloodPressureScreen = () => {
    router.navigate('BloodPressureScreen');
  };

  const navigateToBloodOxygenScreen = () => {
    router.navigate('BloodOxygenScreen');
  };

  const navigateToBreathingFrequencyScreen = () => {
    router.navigate('BreathingFrequencyScreen');
  };

  const navigateToTemperatureScreen = () => {
    router.navigate('TemperatureScreen');
  };

  const navigateToExamScreen = () => {
    router.navigate('ExamScreen');
  };

  return (
    <ScrollView
      contentContainerStyle={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#ffffff' }]}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      overScrollMode="never"
    >
      <TouchableOpacity style={[styles.mainCardTouchable, { backgroundColor: isDarkMode ? '#1e1e1e' : '#346cb4' }]} onPress={navigateToStepsScreen}>
        <View style={styles.stepsContainer}>
          <View style={[styles.stepsProgressBackground, { backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff' }]}>
            <View style={styles.stepsProgressWrapper}>
              <Text style={[styles.steps, { color: isDarkMode ? '#ffffff' : '#3ebaca' }]}>Pasos</Text>
              <Text style={[styles.stepsCount, { color: isDarkMode ? '#ffffff' : '#3ebaca' }]}>1161</Text>
            </View>
          </View>
          <View style={styles.stats}>
            <View style={styles.iconTextContainer} >
              <Icon name="flame-outline" size={30} color="#ffffff" />
              <Text style={styles.statText}>54 Kcal</Text>
            </View>
            <View style={styles.iconTextContainer}>
              <Icon name="flag-outline" size={30} color="#ffffff" />
              <Text style={styles.statText}>10000</Text>
            </View>
            <View style={styles.iconTextContainer}>
              <Icon name="navigate-outline" size={30} color="#ffffff" />
              <Text style={styles.statText}>0.909 km</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles.grid}>
        <TouchableOpacity style={[styles.gridItem, { backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff' }]} onPress={navigateToHeartECGScreen}>
          <Icon name="pulse-outline" size={60} color="#ff8a65" />
          <Text style={[styles.gridText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>ECG</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.gridItem, { backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff' }]} onPress={navigateToSleepScreen}>
          <Icon name="moon-outline" size={60} color="#ffca28" />
          <Text style={[styles.gridText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Sueño</Text>
          <Text style={[styles.gridSubText, { color: isDarkMode ? 'lightgrey' : '#888' }]}>00 h 00 min</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.gridItem, { backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff' }]} onPress={navigateToHeartRateScreen}>
          <Icon name="heart-outline" size={60} color="#f48fb1" />
          <Text style={[styles.gridText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Ritmo Cardiaco</Text>
          <Text style={[styles.gridSubText, { color: isDarkMode ? 'lightgrey' : '#888' }]}>73 bpm</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.gridItem, { backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff' }]} onPress={navigateToBloodPressureScreen}>
          <Icon name="speedometer-outline" size={60} color="#9575cd" />
          <Text style={[styles.gridText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Presión Arterial</Text>
          <Text style={[styles.gridSubText, { color: isDarkMode ? 'lightgrey' : '#888' }]}>114/77 mmHg</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.gridItem, { backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff' }]} onPress={navigateToBloodOxygenScreen}>
          <Icon name="water-outline" size={60} color="#4db6ac" />
          <Text style={[styles.gridText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Oxígeno en sangre</Text>
          <Text style={[styles.gridSubText, { color: isDarkMode ? 'lightgrey' : '#888' }]}>98%</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.gridItem, { backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff' }]} onPress={navigateToBreathingFrequencyScreen}>
          <Icon name="cloud-outline" size={60} color="#ef5350" />
          <Text style={[styles.gridText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Frecuencia respiratoria</Text>
          <Text style={[styles.gridSubText, { color: isDarkMode ? 'lightgrey' : '#888' }]}>15 rpm</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.gridItem, { backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff' }]} onPress={navigateToTemperatureScreen}>
          <Icon name="thermometer-outline" size={60} color="#ff7043" />
          <Text style={[styles.gridText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Temperatura</Text>
          <Text style={[styles.gridSubText, { color: isDarkMode ? 'lightgrey' : '#888' }]}>36.2°C</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={[styles.healthCheck, { backgroundColor: isDarkMode ? '#1e1e1e' : '#e8f5e9' }]} onPress={navigateToExamScreen}>
        <Text style={[styles.healthCheckText, { color: isDarkMode ? '#ffffff' : '#4caf50' }]}>Autoexamen de salud</Text>
        <Text style={[styles.healthCheckSubText, { color: isDarkMode ? 'lightgrey' : '#4caf50' }]}>Ven y comprueba cuántos puntos puede sumar tu cuerpo</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
  mainCardTouchable: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 20,
    alignItems: 'center',
  },
  stepsContainer: {
    alignItems: 'center',
  },
  stepsProgressBackground: {
    width: 160,
    height: 160,
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepsProgressWrapper: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 8,
    borderColor: '#346cb4',
    overflow: 'hidden',
  },
  steps: {
    fontSize: 20,
    marginTop: 8,
    textAlign: 'center',
  },
  stepsCount: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 12,
  },
  iconTextContainer: {
    alignItems: 'center',
  },
  statText: {
    fontSize: 16,
    color: '#ffffff',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  gridItem: {
    borderRadius: 10,
    padding: 20,
    width: '48%',
    alignItems: 'center',
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  gridText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
  },
  gridSubText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
  },
  healthCheck: {
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginBottom: 35,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  healthCheckText: {
    fontSize: 18,
    marginBottom: 6,
  },
  healthCheckSubText: {
    fontSize: 14,
    textAlign: 'center',
  },
});
