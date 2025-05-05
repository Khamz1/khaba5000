import { useParams } from 'react-router-dom';
import { usePostsStore } from '../../store/posts.store';
import { useEffect, useState } from 'react';
import H2 from '../Ui/Headers/H2'
import S from './detail.module.css'
import {Container} from '../Ui/Container/Container'

 const PostDetail = () => {
  const { id } = useParams();
  const { fetchPostById, currentPost, loading } = usePostsStore();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetchPostById(id).then(setPost);
  }, [id, fetchPostById]);
  console.log(post,"Its Post")

  if (loading) return <div>Loading...</div>;

  return  currentPost? ( 
    <Container className={S.container}>
    <div className={S.PostDetail}>
      <H2 className={S.h2Detail}>{currentPost.title}</H2>
        <span className={S.image}> {currentPost.image && (
                  <img
                    src={`http://localhost:3030${currentPost.image}`}
                    alt="Превью поста"
                  />
                )}
                </span>
      <p className={S.text}>{currentPost.text}</p>
    </div>
    </Container>
  ):
  "Такого поста у нас нет(";
};

export default PostDetail;