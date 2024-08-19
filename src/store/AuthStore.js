import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(
  persist(
    (set, get) => ({
      isAuthenticated: false,
      users: {},

      signup: (email, password, role) => {
        const users = get().users;

        if (users[email]) {
          return { success: false, message: 'User already exists' };
        }

        set((state) => ({
          users: {
            ...state.users,
            [email]: { password, role },
          },
        }));

        return { success: true, message: 'User registered successfully' };
      },

      login: (email, password) => {
        const users = get().users;

        if (users[email] && users[email].password === password) {
          set({ isAuthenticated: true, role: users[email].role });
          return true;
        } else {
          return false;
        }
      },

      logout: () => {
        set({ isAuthenticated: false, role: null });
      },

      role: null,
    }),
    {
      name: 'auth',
      getStorage: () => localStorage,
    }
  )
);

export default useAuthStore;
