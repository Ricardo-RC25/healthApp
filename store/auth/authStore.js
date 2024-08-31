import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';


const useAuthStore = create(
    persist(
      (set) => ({
        isLoggedIn: false,
        user: null,
        login: (user) => set({ isLoggedIn: true, user }),
        logout: () => set({ isLoggedIn: false, user: null }),
      }),
      {
        name: 'auth', // nombre de la clave de almacenamiento
        storage: createJSONStorage(() => AsyncStorage), // utiliza AsyncStorage en React Native
      }
    )
  );
  
  export default useAuthStore;