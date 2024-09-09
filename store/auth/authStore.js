import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';



const useAuthStore = create(
    persist(
      (set) => ({
        isLoggedIn: false,
        user: {},
        login: (user) => set({ isLoggedIn: true, user }),
        logout: () => set({ isLoggedIn: false, user: {} }),
      }),
      {
        name: 'auth', // nombre de la clave de almacenamiento
        storage: createJSONStorage(() => AsyncStorage), // utiliza AsyncStorage en React Native
      }
    )
  );
  
  export default useAuthStore;