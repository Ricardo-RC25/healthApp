import { Stack } from "expo-router";

export default function MainLayout() {
    return(
        <Stack 
            screenOptions={{
                headerShown:false,
            }}
        >

            <Stack.Screen 
                name="register" 
                options={
                    {
                        title:"Registro",
                        headerTitleAlign:'center',
                        headerShown:true
                    }
                } 
            />
            <Stack.Screen 
                name="validation" 
                options={
                    {
                        title:"Validacion",
                        headerTitleAlign:'center',
                        headerShown:true
                    }
                } 
            />

        </Stack>
    )
}