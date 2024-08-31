import { router, Tabs } from 'expo-router';
import React from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Stack } from 'expo-router';

export default function ProfileLayout() {

  const screens = [
    { name: "AboutUsScreen", title: "Sobre Nosotros" },
    { name: "DeviceScreen", title: "Dispositivos" },
    { name: "HelpScreen", title: "Ayuda" },
    { name: "LanguagesScreen", title: "Idiomas" },
    { name: "SecurityScreen", title: "Seguridad" },
    { name: "StorageScreen", title: "Almacenamiento" },
    { name: "HealthSettingsScreen", title: "Configuración de Salud" },
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
