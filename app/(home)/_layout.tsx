import { router, Tabs } from 'expo-router';
import React from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Stack } from 'expo-router';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function HomeLayout() {
  const colorScheme = useColorScheme();

  const isDarkMode = colorScheme === 'dark';
  const backgroundColor = isDarkMode ? '#000000' : '#ffffff';
  const textColor = isDarkMode ? '#FFFFFF' : '#000000';

  const screens = [
    { name: "StepsScreen", title: "Pasos" },
    { name: "ECGScreen", title: "ECG" },
    { name: "SleepScreen", title: "Sueño" },
    { name: "HeartRateScreen", title: "Ritmo Cardiaco" },
    { name: "BloodPressureScreen", title: "Presión Arterial" },
    { name: "BloodOxygenScreen", title: "Oxígeno en Sangre" },
    { name: "BreathingFrequencyScreen", title: "Frecuencia Respiratoria" },
    { name: "TemperatureScreen", title: "Temperatura" },
    { name: "ExamScreen", title: "Exámenes" },
  ];

  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundColor}
      />
      <Stack
        initialRouteName='home'
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
