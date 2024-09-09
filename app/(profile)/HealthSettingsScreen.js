import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function HealthSettingsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.optionRow}>
        <Text style={styles.optionText}>Vigilancia de la salud</Text>
        <Switch value={true} trackColor={{ false: '#767577', true: '#34C759' }} />
      </View>

      <TouchableOpacity style={styles.optionRow}>
        <Text style={styles.optionText}>Intervalo</Text>
        <Text style={styles.optionDetail}>60min</Text>
        <Icon name="chevron-forward-outline" size={25} color="#000" style={styles.optionIcon} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionRow}>
        <Text style={styles.optionText}>Metas deportivas</Text>
        <Text style={styles.optionDetail}>10000 pasos</Text>
        <Icon name="chevron-forward-outline" size={25} color="#000" style={styles.optionIcon} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionRow}>
        <Text style={styles.optionText}>Metas de sueño</Text>
        <Text style={styles.optionDetail}>8h</Text>
        <Icon name="chevron-forward-outline" size={25} color="#000" style={styles.optionIcon} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionRow}>
        <Text style={styles.optionText}>Calibración de presión arterial</Text>
        <Text style={styles.optionDetail}>120/80</Text>
        <Icon name="chevron-forward-outline" size={25} color="#000" style={styles.optionIcon} />
      </TouchableOpacity>

      <View style={styles.optionRow}>
        <Text style={styles.optionText}>Advertencia de temperatura</Text>
        <Switch value={false} trackColor={{ false: '#767577', true: '#34C759' }} />
      </View>

      <View style={styles.optionRow}>
        <Text style={styles.optionText}>Alarma de frecuencia cardiaca</Text>
        <Switch value={false} trackColor={{ false: '#767577', true: '#34C759' }} />
      </View>

      <View style={styles.optionRow}>
        <Text style={styles.optionText}>Recordatorio sedentario</Text>
        <Switch value={false} trackColor={{ false: '#767577', true: '#34C759' }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  optionText: {
    fontSize: 16,
    color: '#000',
    flex: 1,
  },
  optionDetail: {
    fontSize: 14,
    color: '#888',
  },
  optionIcon: {
    marginLeft: 'auto',
  },
});
