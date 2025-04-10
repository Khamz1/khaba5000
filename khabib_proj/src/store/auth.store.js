import {create} from "zustand";
import { AuthAPI } from '../api/auth';

export const useAuthStore = create((set) => ({
    user: null,
    token: localStorage.getItem('token') || null,
    isAuthenticated: !!localStorage.getItem('token'),
    loading:false,
    error:null,

    login: async (email, password) => {
        try {
            const { user, token } = await AuthAPI.login(email, password);
            localStorage.setItem('token', token);
            set({ user, token, isAuthenticated: true });
        } catch (error) {
            throw new Error(error.response?.data?.error || 'Ошибка входа');
        }
    },

    register: async (userData) => {
        set({ loading: true });
        try {
            const { user, token } = await AuthAPI.register(userData);
            localStorage.setItem('token', token);
            set({
                user,
                token,
                isAuthenticated: true,
                loading: false
            });
            return { user, token };
        } catch (error) {
            set({ loading: false });
            throw new Error(error.response?.data?.error || 'Ошибка регистрации');
        }
    },

    fetchProfile: async () => {
        try {
            const user = await AuthAPI.getMe();
            set({ user });
        } catch (error) {
            console.error(error);
            localStorage.removeItem('token');
            set({ user: null, token: null, isAuthenticated: false });
        }
    }
}));
