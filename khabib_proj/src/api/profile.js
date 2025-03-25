import api from './axiosConfig.js'

export const ProfileAPI = {
    getProfile:async()=>{
        const response = await  api.get(`/profile`)
        return response.data
    },
    updateProfile:async(profileData)=>{
        const response = await api.patch(`/profiles/${profileData.id}`, profileData);
        return response.data
    },
    uploadAvatar: async (file) => {
        const formData = new FormData();
        formData.append('avatar', file);

        const response = await api.post('/profile/avatar', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    },
};
