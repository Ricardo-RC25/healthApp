import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useColorScheme } from 'react-native';

export default function HelpScreen() {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const categories = [
    { id: '1', name: 'Account Settings' },
    { id: '2', name: 'Device function' },
    { id: '3', name: 'Information push' },
    { id: '4', name: 'Data synchronization' },
    { id: '5', name: 'Motion module' },
    { id: '6', name: 'Care module' },
    { id: '7', name: 'Other functions' },
  ];

  const commonProblems = [
    { id: '1', title: 'What to do if the firmware update fails' },
    { id: '2', title: 'About synchronizing historical data' },
  ];

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#ffffff' }]}>
      <View style={[styles.searchContainer, { backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff' }]}>
        <TextInput 
          style={[styles.searchInput, { color: isDarkMode ? '#ffffff' : '#000000' }]}
          placeholder="Buscar"
          placeholderTextColor={isDarkMode ? '#888888' : '#000000'}
        />
        <Icon name="search-outline" size={20} color={isDarkMode ? '#ffffff' : '#000000'} />
      </View>

      <View style={styles.categoriesContainer}>
        {categories.map(category => (
          <TouchableOpacity key={category.id} style={[styles.categoryItem, { backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff' }]}>
            <View style={[styles.categoryIconPlaceholder, { backgroundColor: isDarkMode ? '#f67b4d' : '#f67b4d' }]} />
            <Text style={[styles.categoryText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.commonProblemsContainer}>
        <Text style={[styles.commonProblemsTitle, { color: isDarkMode ? '#ffffff' : '#000000' }]}>problema comun</Text>
        {commonProblems.map(problem => (
          <TouchableOpacity key={problem.id} style={[styles.problemItem, { backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff' }]}>
            <Text style={[styles.problemText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>{problem.title}</Text>
            <Icon name="chevron-forward-outline" size={20} color={isDarkMode ? '#ffffff' : '#000000'} />
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.feedbackButton}>
        <Icon name="chatbubble-outline" size={20} color="#ffffff" />
        <Text style={styles.feedbackText}>Comentario</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  categoryItem: {
    width: '48%',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  categoryIconPlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginBottom: 10,
  },
  categoryText: {
    fontSize: 14,
    textAlign: 'center',
  },
  commonProblemsContainer: {
    marginBottom: 30,
  },
  commonProblemsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  problemItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 16,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  problemText: {
    fontSize: 14,
  },
  feedbackButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#32cd32',
    borderRadius: 20,
    paddingVertical: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  feedbackText: {
    fontSize: 14,
    color: '#fff',
    marginLeft: 8,
  },
});