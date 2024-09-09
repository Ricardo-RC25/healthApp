import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function HelpScreen() {
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
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput 
          style={styles.searchInput}
          placeholder="Buscar"
        />
        <Icon name="search-outline" size={20} color="#000" />
      </View>

      <View style={styles.categoriesContainer}>
        {categories.map(category => (
          <TouchableOpacity key={category.id} style={styles.categoryItem}>
            <View style={styles.categoryIconPlaceholder} />
            <Text style={styles.categoryText}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.commonProblemsContainer}>
        <Text style={styles.commonProblemsTitle}>problema comun</Text>
        {commonProblems.map(problem => (
          <TouchableOpacity key={problem.id} style={styles.problemItem}>
            <Text style={styles.problemText}>{problem.title}</Text>
            <Icon name="chevron-forward-outline" size={20} color="#000" />
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.feedbackButton}>
        <Icon name="chatbubble-outline" size={20} color="#fff" />
        <Text style={styles.feedbackText}>Comentario</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
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
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  categoryIconPlaceholder: {
    width: 50,
    height: 50,
    backgroundColor: '#f67b4d', // Placeholder color similar to the icon color in the image
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
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 16,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  problemText: {
    fontSize: 14,
    color: '#000',
  },
  feedbackButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#32cd32', // Green color similar to the comment button in the image
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

