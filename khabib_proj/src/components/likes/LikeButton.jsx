
import { usePostsStore } from '../../store/posts.store';
import { useAuthStore } from '../../store/auth.store';
import { useState } from 'react';
import S from './like.module.css'

const LikeButton = ({ post }) => {
    const { toggleLike } = usePostsStore();
    const { user } = useAuthStore();
    const [isLoading, setIsLoading] = useState(false);
    
    const isLiked = Array.isArray(post.likes)
    ? post.likes.some(like => like?.user?._id === user?._id)
    : false;


  
    const handleLike = async () => {
        if (!user) return;
        setIsLoading(true);
        try {
          await toggleLike(post._id, user); // передаём user
        } catch (error) {
          console.error('Like failed:', error.response?.data?.message || error.message);
        } finally {
          setIsLoading(false);
        }
      };
      
  
    return (
      <button className={S.like} 
        onClick={handleLike}
        disabled={isLoading}
        
      >
        
        {isLoading ? '...' : isLiked ? '❤️' : '🤍'} {post.likes?.length || 0}
      </button>
    );
  };

export default LikeButton