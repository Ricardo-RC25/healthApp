import { Tabs } from 'expo-router';
import React from 'react';
import { StatusBar } from 'react-native';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const screens = [
    "(screens)/StepsScreen",
    "(screens)/ECGScreen",
    "(screens)/SleepScreen",
    "(screens)/HeartRateScreen",
    "(screens)/BloodPressureScreen",
    "(screens)/BloodOxygenScreen",
    "(screens)/BreathingFrequencyScreen",
    "(screens)/TemperatureScreen",
    "(screens)/ExamScreen",
  ];

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#36a9b4" />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: true, // Habilita el encabezado para todas las pantallas
          headerStyle: {
            backgroundColor: '#36a9b4',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        {screens.map(screen => (
          <Tabs.Screen
            key={screen}
            name={screen}
            options={{
              title: screen.replace('(screens)/', '').replace('Screen', ''),
              href: null // Título dinámico basado en el nombre del screen
            }}
          />
        ))}

        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="sport"
          options={{
            title: 'Sport',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'bicycle' : 'bicycle-outline'} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="health"
          options={{
            title: 'Health',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'heart' : 'heart-outline'} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
