import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, useColorScheme } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function HealthSettingsScreen() {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#fff' }]}>
      <View style={[styles.optionRow, styles.optionWithBottomBorder, { backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff' }]}>
        <Text style={[styles.optionText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Vigilancia de la salud</Text>
        <Switch value={true} trackColor={{ false: '#767577', true: '#34C759' }} />
      </View>

      <TouchableOpacity style={[styles.optionRow, styles.optionWithBottomBorder, { backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff' }]}>
        <Text style={[styles.optionText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Intervalo</Text>
        <Text style={[styles.optionDetail, { color: isDarkMode ? '#b0bec5' : '#888888' }]}>60min</Text>
        <Icon name="chevron-forward-outline" size={25} color={isDarkMode ? '#ffffff' : '#000000'} style={styles.optionIcon} />
      </TouchableOpacity>

      <TouchableOpacity style={[styles.optionRow, styles.optionWithBottomBorder, { backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff' }]}>
        <Text style={[styles.optionText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Metas deportivas</Text>
        <Text style={[styles.optionDetail, { color: isDarkMode ? '#b0bec5' : '#888888' }]}>10000 pasos</Text>
        <Icon name="chevron-forward-outline" size={25} color={isDarkMode ? '#ffffff' : '#000000'} style={styles.optionIcon} />
      </TouchableOpacity>

      <TouchableOpacity style={[styles.optionRow, styles.optionWithBottomBorder, { backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff' }]}>
        <Text style={[styles.optionText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Metas de sueño</Text>
        <Text style={[styles.optionDetail, { color: isDarkMode ? '#b0bec5' : '#888888' }]}>8h</Text>
        <Icon name="chevron-forward-outline" size={25} color={isDarkMode ? '#ffffff' : '#000000'} style={styles.optionIcon} />
      </TouchableOpacity>

      <TouchableOpacity style={[styles.optionRow, styles.optionWithBottomBorder, { backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff' }]}>
        <Text style={[styles.optionText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Calibración de presión arterial</Text>
        <Text style={[styles.optionDetail, { color: isDarkMode ? '#b0bec5' : '#888888' }]}>120/80</Text>
        <Icon name="chevron-forward-outline" size={25} color={isDarkMode ? '#ffffff' : '#000000'} style={styles.optionIcon} />
      </TouchableOpacity>

      <View style={[styles.optionRow, styles.optionWithBottomBorder, { backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff' }]}>
        <Text style={[styles.optionText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Advertencia de temperatura</Text>
        <Switch value={false} trackColor={{ false: '#767577', true: '#34C759' }} />
      </View>

      <View style={[styles.optionRow, styles.optionWithBottomBorder, { backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff' }]}>
        <Text style={[styles.optionText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Alarma de frecuencia cardiaca</Text>
        <Switch value={false} trackColor={{ false: '#767577', true: '#34C759' }} />
      </View>

      <View style={[styles.optionRow, styles.optionWithBottomBorder, { backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff' }]}>
        <Text style={[styles.optionText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Recordatorio sedentario</Text>
        <Switch value={false} trackColor={{ false: '#767577', true: '#34C759' }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  optionWithBottomBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#ffff', 
  },
  optionText: {
    fontSize: 16,
    flex: 1,
  },
  optionDetail: {
    fontSize: 14,
  },
  optionIcon: {
    marginLeft: 'auto',
  },
});