import { router, Tabs } from 'expo-router';
import React from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Stack } from 'expo-router';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function ProfileLayout() {
  const colorScheme = useColorScheme();

  const isDarkMode = colorScheme === 'dark';
  const backgroundColor = isDarkMode ? '#000000' : '#ffffff';
  const textColor = isDarkMode ? '#FFFFFF' : '#000000';

  const screens = [
    { name: "AboutUsScreen", title: "Sobre Nosotros" },
    { name: "DeviceScreen", title: "Mi dispositivo" },
    { name: "HelpScreen", title: "Ayuda" },
    { name: "LanguagesScreen", title: "Idiomas" },
    { name: "SecurityScreen", title: "Seguridad" },
    { name: "StorageScreen", title: "Almacenamiento" },
    { name: "HealthSettingsScreen", title: "Configuración de salud" },
  ];

  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundColor}
      />
      <Stack
        initialRouteName='profile'
        screenOptions={{
          headerStyle: {
            backgroundColor,
          },
          headerTintColor: textColor,
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
