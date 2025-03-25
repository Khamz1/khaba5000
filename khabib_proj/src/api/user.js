import api from './axiosConfig';

export const UserAPI = {
    updateUser: async (id, userData) => {
        const response = await api.patch(`/user/${id}`, userData);
        return response.data;
    },

    getUsers: async () => {
        const response = await api.get('/user');
        return response.data;
    }
};
