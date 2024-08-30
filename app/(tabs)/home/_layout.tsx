import { router, Tabs } from 'expo-router';
import React from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Stack } from 'expo-router';

export default function HomeLayout() {

    const screens = [
      "home",
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
          <Stack.Screen 
            name="index"
            options={{
              title: 'Home',
              headerLeft: () => null,
            }} 
          />
        </Stack>
      </>
    );
  }