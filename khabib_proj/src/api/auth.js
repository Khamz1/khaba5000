import api from './axiosConfig.js'

export const AuthAPI = {
    login: async (email, password) => {
        const response = await api.post('/login', {email, password})
        return response.data
    },
    register: async (userData) => {
        const response = await api.post('/register',userData);
        return response.data
    },
    logout: async ()=>{
        await api.post('/logout')
    }
}
