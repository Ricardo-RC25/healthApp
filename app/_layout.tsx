import { router, Stack } from "expo-router";
import useAuthStore from '../store/auth/authStore';

export default function AppLayout() {
    const isLoggedIn = useAuthStore(state => state.isLoggedIn);

    console.log(isLoggedIn);
    

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
