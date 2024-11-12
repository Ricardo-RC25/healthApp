import { router, Tabs } from 'expo-router';
import React, { useEffect } from 'react';
import { StatusBar, Image, View, Text } from 'react-native';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { useColorScheme } from '@/hooks/useColorScheme';
import Animated, { Easing, useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import useAuthStore from '../../store/auth/authStore';

function AnimatedTabIcon({ name, color, focused }) {
  const scale = useSharedValue(focused ? 1.2 : 1);
  const backgroundScale = useSharedValue(focused ? 1 : 0);

  const iconStyle = useAnimatedStyle(() => ({
    transform: [{ scale: withTiming(scale.value, { duration: 200, easing: Easing.out(Easing.poly(4)) }) }],
  }));

  const backgroundStyle = useAnimatedStyle(() => ({
    transform: [{ scaleX: withTiming(backgroundScale.value, { duration: 200 }) }],
    backgroundColor: focused ? '#38c0c0' : 'transparent',
    opacity: withTiming(focused ? 1 : 0, { duration: 200 }),
  }));

  useEffect(() => {
    scale.value = focused ? 1 : 0.8;
    backgroundScale.value = focused ? 1 : 0;
  }, [focused]);

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Animated.View style={[styles.focusedTabBackground, backgroundStyle]} />
      <Animated.View style={iconStyle}>
        <TabBarIcon name={name} color={color} />
      </Animated.View>
    </View>
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const isLoggedIn = useAuthStore(state => state.isLoggedIn);

  const isDarkMode = colorScheme === 'dark';
  const backgroundColor = isDarkMode ? '#000000' : '#ffffff';
  const textColor = isDarkMode ? '#ffffff' : '#000000';
  const borderBottomColor = isDarkMode ? '#333333' : '#e0e0e0';

  useEffect(() => {
    const unsubscribe = router.replace(isLoggedIn ? "/(tabs)" : '/(auth)/login');
    return unsubscribe;
  }, [isLoggedIn]);

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={backgroundColor} />
      <Tabs
        screenOptions={{
          headerStyle: { 
            backgroundColor,
            borderBottomWidth: 1,
            borderBottomColor: borderBottomColor
          },
          headerTintColor: textColor,
          headerTitleStyle: { fontWeight: 'bold' },
          headerTitleAlign: 'center',
          tabBarStyle: {
            backgroundColor,
            borderTopColor: isDarkMode ? '#333333' : '#dddddd',
            borderTopWidth: 1,
            height: 80,
            paddingBottom: 10,
            paddingTop: 10,
          },
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: 'bold',
            color: textColor,
          },
          tabBarShowLabel: true,
          headerShown: true,
          transitionSpec: {
            open: {
              animation: 'timing',
              config: { duration: 300, easing: Easing.out(Easing.poly(4)) },
            },
            close: {
              animation: 'timing',
              config: { duration: 300, easing: Easing.in(Easing.poly(4)) },
            },
          },
        }}>

        
        <Tabs.Screen
          name="index"
          options={{
            title: 'Inicio',
            tabBarIcon: ({ color, focused }) => (
              <AnimatedTabIcon name={focused ? 'home' : 'home-outline'} color={focused ? '#346cb4' : textColor} focused={focused} />
            ),
            tabBarLabel: ({ focused }) => (
              <Text style={{ color: focused ? textColor : textColor, fontSize: 14, fontWeight: 'bold' }}>Inicio</Text>
            ),
            headerLeft: () => (
              <Image
                source={require('../../assets/imagen/Logo.png')} 
                style={{ width: 40, height: 40, marginLeft: 16, resizeMode: 'contain' }} 
              />
            ),
            headerShown: true,
          }}
        />

        <Tabs.Screen
          name="sport"
          options={{
            title: 'Deporte',
            tabBarIcon: ({ color, focused }) => (
              <AnimatedTabIcon name={focused ? 'bicycle' : 'bicycle-outline'} color={focused ? '#346cb4' : textColor} focused={focused} />
            ),
            tabBarLabel: ({ focused }) => (
              <Text style={{ color: focused ? textColor : textColor, fontSize: 14, fontWeight: 'bold' }}>Deporte</Text>
            ),
            headerLeft: () => (
              <Image
                source={require('../../assets/imagen/Logo.png')} 
                style={{ width: 40, height: 40, marginLeft: 16, resizeMode: 'contain' }} 
              />
            ),
            headerShown: true,
          }}
        />

        <Tabs.Screen
          name="health"
          options={{
            title: 'Salud',
            tabBarIcon: ({ color, focused }) => (
              <AnimatedTabIcon name={focused ? 'heart' : 'heart-outline'} color={focused ? '#346cb4' : textColor} focused={focused} />
            ),
            tabBarLabel: ({ focused }) => (
              <Text style={{ color: focused ? textColor : textColor, fontSize: 14, fontWeight: 'bold' }}>Salud</Text>
            ),
            headerLeft: () => (
              <Image
                source={require('../../assets/imagen/Logo.png')} 
                style={{ width: 40, height: 40, marginLeft: 16, resizeMode: 'contain' }} 
              />
            ),
            headerShown: true,
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: 'Perfil',
            tabBarIcon: ({ color, focused }) => (
              <AnimatedTabIcon name={focused ? 'person' : 'person-outline'} color={focused ? '#346cb4' : textColor} focused={focused} />
            ),
            tabBarLabel: ({ focused }) => (
              <Text style={{ color: focused ? textColor : textColor, fontSize: 14, fontWeight: 'bold' }}>Perfil</Text>
            ),
            headerLeft: () => (
              <Image
                source={require('../../assets/imagen/Logo.png')} 
                style={{ width: 40, height: 40, marginLeft: 16, resizeMode: 'contain' }} 
              />
            ),
            headerShown: true,
          }}
        />
      </Tabs>
    </>
  );
}

const styles = {
  focusedTabBackground: {
    position: 'absolute',
    width: 60,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
};
