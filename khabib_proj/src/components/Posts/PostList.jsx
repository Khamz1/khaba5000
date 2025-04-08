import { usePostsStore } from "../../store/posts.store";
import { useEffect } from "react";
import PostCard from "./PostCard.jsx";
import s from "./postList.module.css"
import { Container } from "../Ui/Container/Container.jsx";

const PostList = () => {
  const { posts, loading, error, fetchPosts } = usePostsStore();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Container className={s.PostList}>
      {posts.map((post) => (
        <PostCard
          key={post._id} // Используем уникальный ID поста
          post={post}
        />
      ))}

    </Container>
  );
};

export default PostList;
