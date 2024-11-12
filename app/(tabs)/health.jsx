import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { router } from 'expo-router';

export default function Health() {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const navigateToFriendScreen = () => {
    router.navigate('FriendScreen');
  };

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#ffffff' }]}>      
      <TouchableOpacity style={[styles.newFriend, { backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff' }]} onPress={navigateToFriendScreen}>
        <Text style={[styles.newFriendText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Nuevo amigo</Text>
        <Icon name="chevron-forward" size={24} color={isDarkMode ? '#ffffff' : '#000000'} />
      </TouchableOpacity>

      <View style={styles.noFriends}>
        <Icon name="person-outline" size={48} color={isDarkMode ? 'lightgrey' : 'grey'} />
        <Text style={[styles.noFriendsText, { color: isDarkMode ? 'lightgrey' : 'grey' }]}>No se agregarón amigos</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  newFriend: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  newFriendText: {
    fontSize: 18,
  },
  noFriends: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noFriendsText: {
    fontSize: 18,
    marginTop: 10,
  },
});
