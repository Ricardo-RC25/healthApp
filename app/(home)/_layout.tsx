import { router, Tabs } from 'expo-router';
import React from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Stack } from 'expo-router';

export default function HomeLayout() {

  const screens = [

    { name: "StepsScreen", title: "Pasos" },
    { name: "ECGScreen", title: "ECG" },
    { name: "SleepScreen", title: "Sueño" },
    { name: "HeartRateScreen", title: "Frecuencia Cardiaca" },
    { name: "BloodPressureScreen", title: "Presión Arterial" },
    { name: "BloodOxygenScreen", title: "Oxígeno en Sangre" },
    { name: "BreathingFrequencyScreen", title: "Frecuencia Respiratoria" },
    { name: "TemperatureScreen", title: "Temperatura" },
    { name: "ExamScreen", title: "Exámenes" },
  ];

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#36a9b4" />
      <Stack
        initialRouteName='home'
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
