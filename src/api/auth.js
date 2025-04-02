import api from './axiosConfig';

export const AuthAPI = {
    register: async (userData) => {
        const response = await api.post('/signUp', userData);
        return response.data;
    },

    login: async (email, password) => {
        const response = await api.post('/user/login', { email, password });
        return response.data;
    },

    // getMe: async () => {
    //     const response = await api.get('/user/me'); // Добавьте этот эндпоинт на бэкенде
    //     return response.data;
    // }
};
