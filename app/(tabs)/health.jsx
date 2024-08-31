import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { router } from 'expo-router';


export default function Health() {

  const navigateToFriendScreen = () => {
    router.navigate('FriendScreen');
  };

  return (
    <View style={styles.container}>      
      <TouchableOpacity style={styles.newFriend} onPress={navigateToFriendScreen}>
        <Text style={styles.newFriendText}>Nuevo amigo</Text>
        <Icon name="chevron-forward" size={24} color="black" />
      </TouchableOpacity>

      <View style={styles.noFriends}>
        <Icon name="person-outline" size={48} color="grey" />
        <Text style={styles.noFriendsText}>No se agregaron amigos</Text>
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
    backgroundColor: '#fff',
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
    color: 'grey',
    marginTop: 10,
  },
});

