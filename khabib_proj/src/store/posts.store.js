import { create } from "zustand";
import { PostsAPI } from "../api/posts";
import api from "../api/axiosConfig";
import { useAuthStore } from "./auth.store";

export const usePostsStore = create((set) => ({
  posts: [],
  currentPost: null,
  loading: false,

  fetchPosts: async () => {
    set({ loading: true });
    try {
      const posts = await PostsAPI.getPosts();
      set({ posts, loading: false });
    } catch (error) {
      set({ loading: false });
      throw error;
    }
  },

  fetchPostById: async (id) => {
    set({ loading: true });
    try {
      const post = await PostsAPI.getPostById(id);
      set({ currentPost: post, loading: false });
    } catch (error) {
      set({ loading: false });
      throw error;
    }
  },

  createPost: async (postData) => {
    set({ loading: true, error: null });
    try {
      const newPost = await PostsAPI.createPost(postData);
      set((state) => ({
        posts: [newPost, ...state.posts],
        loading: false,
      }));
      return newPost;
    } catch (error) {
      set({
        error: error.response?.data?.error || "Ошибка при создании поста",
        loading: false,
      });
      throw error;
    }
  },

  deletePost: async (id, userId, userRole) => {
    set({ loading: true });
    try {
      await PostsAPI.deletePost(id, userId, userRole);
      set((state) => ({
        posts: state.posts.filter((post) => post._id !== id),
        loading: false,
      }));
    } catch (error) {
      set({ loading: false });
      throw error;
    }
  },
  toggleLike: async (postId) => {
    try {
      const { user } = useAuthStore.getState(); // <-- вот здесь
      const userId = user?._id;
  
      const response = await api.post(`/api/likes/${postId}`, { userId });
  
      set((state) => ({
        posts: state.posts.map((post) => {
          if (post._id !== postId) return post;
  
          const currentLikes = Array.isArray(post.likes) ? post.likes : [];
  
          return {
            ...post,
            likes: response.data.liked
              ? [...currentLikes, { user: { _id: userId } }]
              : currentLikes.filter((like) => like?.user?._id !== userId),
          };
        }),
      }));
    } catch (error) {
      console.error("Like error:", error);
      throw error;
    }
  }
  
}));
