import { router, Stack } from "expo-router";
import useAuthStore from '../store/auth/authStore';
import { useEffect } from "react";

export default function AppLayout() {
    const isLoggedIn = useAuthStore(state => state.isLoggedIn);

    useEffect(() => {
        if (isLoggedIn) {
          router.replace("/(tabs)")
        } else {
          router.replace('/(auth)/login')
        }
      }, [isLoggedIn]);
    

    return (
        <Stack 
            screenOptions={{
                headerShown: false,
                headerTitleAlign:'center'
            }}
        >

            
            {isLoggedIn ? (
                <Stack.Screen name="(tabs)" />
            ) : (
                <Stack.Screen  name="(auth)" />
            )}
        </Stack>
    );
}
