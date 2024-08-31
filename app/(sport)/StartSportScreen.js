import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function StartSportScreen() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else if (!isRunning && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, seconds]);

  const formatTime = (seconds) => {
    const getSeconds = `0${seconds % 60}`.slice(-2);
    const minutes = `${Math.floor(seconds / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(seconds / 3600)}`.slice(-2);
    return `${getHours}:${getMinutes}:${getSeconds}`;
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{formatTime(seconds)}</Text>
      <Text style={styles.timerLabel}>hora</Text>

      <View style={styles.statsRow}>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>--</Text>
          <Text style={styles.statLabel}>Ritmo cardiaco</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>0</Text>
          <Text style={styles.statLabel}>Pasos</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>0</Text>
          <Text style={styles.statLabel}>Calorías</Text>
        </View>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statBoxLarge}>
          <Text style={styles.statValue}>0.00</Text>
          <Text style={styles.statLabel}>kilometraje</Text>
        </View>
        <View style={styles.statBoxLarge}>
          <Text style={styles.statValue}>0'0"</Text>
          <Text style={styles.statLabel}>Paso</Text>
        </View>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="lock-closed-outline" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.stopButton} onPress={handleStop}>
          <Icon name="stop-circle-outline" size={60} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="person-outline" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2d3e3f',
    padding: 16,
  },
  activityText: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 10,
  },
  timerText: {
    color: '#fff',
    fontSize: 60,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  timerLabel: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 30,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 15,
  },
  statBox: {
    flex: 1,
    backgroundColor: '#4e6d70',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  statBoxLarge: {
    flex: 1,
    backgroundColor: '#4e6d70',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  statValue: {
    color: '#fff',
    fontSize: 22,
    marginBottom: 5,
  },
  statLabel: {
    color: '#b0bec5',
    fontSize: 14,
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 30,
  },
  iconButton: {
    backgroundColor: '#344d4f',
    padding: 15,
    borderRadius: 50,
  },
  stopButton: {
    backgroundColor: '#ff3d00',
    padding: 15,
    borderRadius: 50,
  },
});
