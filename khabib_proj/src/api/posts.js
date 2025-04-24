import api from './axiosConfig';

export const PostsAPI = {
    createPost: async (postData) => {
        const response = await api.post('/post', postData);
        return response.data;
    },

    getPosts: async () => {
        const response = await api.get('/post');
        return response.data;
    },

    getPostById: async (id) => {
        const response = await api.get(`/post/${id}`);
        return response.data;
    },

    deletePost: async (id, userId, userRole) => {
        await api.delete(`/post/${id}`, {
            data: { userId, userRole } // Отправка дополнительных данных для проверки прав
        });
    },
    toggleLike: (postId) => api.post(`/api/likes/${postId}`),
};

