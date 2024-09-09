import { router, Tabs } from 'expo-router';
import React from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Stack } from 'expo-router';

export default function HealthLayout() {

  const screens = [
    { name: "FriendScreen", title: "Amigos" },
  ];

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#36a9b4" />
      <Stack
        initialRouteName='profile'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#3cbccc',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}
      >
        {screens.map((screen) => (
          <Stack.Screen
            key={screen.name}
            name={screen.name}
            options={{ title: screen.title }}
          />
        ))}
      </Stack>
    </>
  );
}
