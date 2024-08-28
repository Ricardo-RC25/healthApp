import { router, Tabs } from 'expo-router';
import React from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import Animated, { Easing, useAnimatedStyle, withTiming } from 'react-native-reanimated';
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
// Color cuando la pestaña está inactiva
          tabBarStyle: {
            backgroundColor: '#ffffff', // Color de fondo de la barra de pestañas
            borderTopColor: '#ddd', // Color del borde superior
            borderTopWidth: 1, // Grosor del borde superior
            height: 60, // Ajuste para mayor altura
            paddingBottom: 7,
            paddingTop: 7,
          },
          headerShown: true, // Habilita el encabezado para todas las pantallas
          headerStyle: {
            backgroundColor: '#3cbccc',
            height: 70, // Aumenta la altura del header
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18, // Ajusta el tamaño de la fuente según prefieras
            lineHeight: 22, // Opcional: Asegúrate de que sea coherente con el fontSize o elimínalo
            paddingBottom: 10, // Centra verticalmente el texto
          },
          headerTitleAlign: 'center',
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
        {screens.map(screen => (
          <Tabs.Screen
            key={screen}
            name={screen}
            options={{
              title: screen.replace('(screens)/', '').replace('Screen', ''),
              href: null, // Título dinámico basado en el nombre del screen
              headerLeft: () => (
                <TouchableOpacity
                  style={{ paddingLeft: 15, paddingBottom: 10 }}
                  onPress={() => router.back("/home")}
                >
                  <TabBarIcon name="arrow-back"  color="white"/>
                </TouchableOpacity>
              ),
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
