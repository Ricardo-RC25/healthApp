import React from 'react';
import { StatusBar } from 'react-native';
import { Stack } from 'expo-router';

export default function HomeLayout() {

  
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
            
            <Stack.Screen
              key="index"
              name="index"
              options={{
                title: "Sport",
              }}
            />
        </Stack>
      </>
    );
  }