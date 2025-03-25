import create from 'zustand'
import {AuthAPI} from "../api/auth.js";

export const useAuthStore = create((set) => ({
    user: null,
    loading: false,
    error: null,

    login: async (email, password) => {
        set({loading: true, error: null});
        try {

        } catch (error) {
            console.log(error);
        }
    }
}))
