import api from  './axiosConfig.js'

export const PostAPI = {
    getPosts:async()=>{
        const response = await api.get('/posts')
        return response.data
    },
    createPost:async(postData)=>{
        const response = await api.post('/posts',postData)
        return response.data
    },
    deletePost:async(postId)=>{
        await api.delete(`/posts/${postId}`)
    }
}
