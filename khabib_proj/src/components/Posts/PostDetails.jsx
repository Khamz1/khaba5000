import { useParams } from 'react-router-dom';
import { usePostsStore } from '../../store/posts.store';
import { useEffect } from 'react';

 const PostDetail = () => {
  const { id } = useParams();
  const { getPostById } = usePostsStore();
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPostById(id).then(setPost);
  }, [id, getPostById]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      <p>{post.text}</p>
      {/* Остальные детали поста */}
    </div>
  );
};

export default PostDetail;