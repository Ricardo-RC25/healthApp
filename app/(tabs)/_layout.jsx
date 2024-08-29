import { router, Tabs } from 'expo-router';
import React from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import Animated, { Easing, useAnimatedStyle, withTiming } from 'react-native-reanimated';

export default function TabLayout() {
  const colorScheme = useColorScheme();


  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#36a9b4" />
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#ffffff', // Color de fondo de la barra de pestañas
            borderTopColor: '#ddd', // Color del borde superior
            borderTopWidth: 1, // Grosor del borde superior
            height: 60, // Ajuste para mayor altura
            paddingBottom: 7,
            paddingTop: 7,
          },
          headerShown: false, // Habilita el encabezado para todas las pantallas
          transitionSpec: {
            open: {
              animation: 'timing',
              config: {
                duration: 300,
                easing: Easing.out(Easing.poly(4)),
              },
            },
            close: {
              animation: 'timing',
              config: {
                duration: 300,
                easing: Easing.in(Easing.poly(4)),
              },
            },
          },
        }}>

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
