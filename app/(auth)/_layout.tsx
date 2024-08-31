import { Stack } from "expo-router";



export default function MainLayout() {
    

    return(
        <Stack 
            screenOptions={{
                headerTitleAlign:'center',
                headerShown:false
            }}
        >

            <Stack.Screen 
                name="register" 
                options={
                    {
                        title:"Registro",
                        headerShown:true
                    }
                } 
            />
            <Stack.Screen 
                name="validation" 
                options={
                    {
                        title:"Validacion",
                        headerShown:true
                    }
                } 
            />
            <Stack.Screen 
                name="login" 
                options={
                    {
                        title:"Inicio de Sesion",
                    }
                } 
            />
            <Stack.Screen 
                name="index" 
                options={
                    {
                        headerShown:false
                    }
                } 
            />
            

        </Stack>
    )
}