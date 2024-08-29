import { router } from 'expo-router';
import React from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Stack } from 'expo-router';

export default function HomeLayout() {

    const screens = [
      "StepsScreen",
      "ECGScreen",
      "SleepScreen",
      "HeartRateScreen",
      "BloodPressureScreen",
      "BloodOxygenScreen",
      "BreathingFrequencyScreen",
      "TemperatureScreen",
      "ExamScreen",
    ];
  
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="#36a9b4" />
        <Stack
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
          {screens.map(screen => (
              <Stack.Screen
                key={screen}
                name={screen}
                options={{
                  title: screen,
                  headerLeft: () => (
                    <TouchableOpacity
                      style={{ paddingLeft: 10, paddingBottom: 5 }}
                      onPress={() => router.back()}
                    >
                      <TabBarIcon name="arrow-back" color="white" />
                    </TouchableOpacity>
                  ),
                  // Oculta la tabBar en estas pantallas
                }}
              />
            ))}
            
            <Stack.Screen
              key="index"
              name="index"
              options={{
                title: "Home",
                // Oculta la tabBar en estas pantallas
              }}
            />
        </Stack>
      </>
    );
  }