import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { router } from 'expo-router';

export default function HomeScreen() {


  const navigateToStepsScreen = () => {
    router.navigate('home/StepsScreen');
  };

  const navigateToClassificationScreen = () => {
    router.navigate('home/ClassificationScreen');
  };
  const navigateToBoardScreen = () => {
    router.navigate('home/BoardScreen');
  };

  const navigateToHeartECGScreen = () => {
    router.navigate('home/ECGScreen');
  };

  const navigateToSleepScreen = () => {
    router.navigate('home/SleepScreen');
  };

  const navigateToHeartRateScreen = () => {
    router.navigate('home/HeartRateScreen');
  };

  const navigateToBloodPressureScreen = () => {
    router.navigate('home/BloodPressureScreen');
  };

  const navigateToBloodOxygenScreen = () => {
    router.navigate('home/BloodOxygenScreen');
  };

  const navigateToBreathingFrequencyScreen = () => {
    router.navigate('home/BreathingFrequencyScreen');
  };

  const navigateToTemperatureScreen = () => {
    router.navigate('home/TemperatureScreen');
  };
  const navigateToExamScreen = () => {
    router.navigate('home/ExamScreen');
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <TouchableOpacity style={styles.mainCardTouchable} onPress={navigateToStepsScreen}>
        <View style={styles.stepsContainer}>
          <View style={styles.stepsProgressBackground}>
            <View style={styles.stepsProgressWrapper}>
              <Text style={styles.steps}>Pasos</Text>
              <Text style={styles.stepsCount}>1161</Text>
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
        {/* <TouchableOpacity style={[styles.gridItem, styles.smallGridItem]} onPress={navigateToClassificationScreen}>
          <View style={styles.iconTextContainer}>
            <Icon name="medal-outline" size={30} color="#ff7043" />
            <Text style={styles.gridText}>Tabla de clasificación</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.gridItem, styles.smallGridItem]} onPress={navigateToBoardScreen}>
          <View style={styles.iconTextContainer}>
            <Icon name="book-outline" size={30} color="#64b5f6" />
            <Text style={styles.gridText}>Columna de Salud</Text>
          </View>
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.gridItem} onPress={navigateToHeartECGScreen}>
          <Icon name="pulse-outline" size={60} color="#ff8a65" />
          <Text style={styles.gridText}>ECG</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem} onPress={navigateToSleepScreen}>
          <Icon name="moon-outline" size={60} color="#ffca28" />
          <Text style={styles.gridText}>Dormir</Text>
          <Text style={styles.gridSubText}>00 h 00 min</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem} onPress={navigateToHeartRateScreen}>
          <Icon name="heart-outline" size={60} color="#f48fb1" />
          <Text style={styles.gridText}>Ritmo cardiaco</Text>
          <Text style={styles.gridSubText}>73 bpm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem} onPress={navigateToBloodPressureScreen}>
          <Icon name="speedometer-outline" size={60} color="#9575cd" />
          <Text style={styles.gridText}>Presión arterial</Text>
          <Text style={styles.gridSubText}>114/77 mmHg</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem} onPress={navigateToBloodOxygenScreen}>
          <Icon name="water-outline" size={60} color="#4db6ac" />
          <Text style={styles.gridText}>Oxígeno en sangre</Text>
          <Text style={styles.gridSubText}>98%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem} onPress={navigateToBreathingFrequencyScreen}>
          <Icon name="cloud-outline" size={60} color="#ef5350" />
          <Text style={styles.gridText}>Frecuencia respiratoria</Text>
          <Text style={styles.gridSubText}>15 rpm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem} onPress={navigateToTemperatureScreen}>
          <Icon name="thermometer-outline" size={60} color="#ff7043" />
          <Text style={styles.gridText}>Temperatura</Text>
          <Text style={styles.gridSubText}>36.2°C</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.healthCheck} onPress={navigateToExamScreen}>
        <Text style={styles.healthCheckText}>Autoexamen de salud</Text>
        <Text style={styles.healthCheckSubText}>Ven y comprueba cuántos puntos puede sumar tu cuerpo</Text>
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
    backgroundColor: '#346cb4',
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
    backgroundColor: '#ffffff',
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
  stepsProgress: {
    position: 'absolute',

    backgroundColor: '#3d0890',
  },
  steps: {
    fontSize: 20,
    color: '#3d0890',
    marginTop: 8,
    textAlign: 'center',
  },
  stepsCount: {
    fontSize: 48,
    color: '#3d0890',
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
    backgroundColor: '#ffffff',
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
  smallGridItem: {
    height: 100,
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  gridText: {
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
    marginTop: 10,
  },
  gridSubText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginTop: 5,
  },
  healthCheck: {
    backgroundColor: '#e8f5e9',
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
    color: '#4caf50',
    marginBottom: 6,
  },
  healthCheckSubText: {
    fontSize: 14,
    color: '#4caf50',
    textAlign: 'center',
  },
});
