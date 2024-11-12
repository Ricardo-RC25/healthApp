import { router, Tabs } from 'expo-router';
import React from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Stack } from 'expo-router';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function HealthLayout() {
  const colorScheme = useColorScheme();

  const screens = [
    { name: "StartSportScreen", title: "Iniciar Deporte" },
  ];

  return (
    <>
      <StatusBar 
        barStyle={colorScheme === 'dark' ? 'light-content' : 'light-content'} light-content
        backgroundColor="#2d3e3f" 
      />
      <Stack
        initialRouteName='sport'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2d3e3f',
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
