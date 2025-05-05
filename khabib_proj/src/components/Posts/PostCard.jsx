import { useNavigate } from "react-router-dom";
import Button from "../Ui/Button/Button";
import s from "./postCard.module.css";
import { usePostsStore } from "../../store/posts.store";
import { useAuthStore } from "../../store/auth.store";
import LikeButton from "../likes/LikeButton";

const PostCard = ({ post }) => {
  const authorName = post.author?.name || "Неизвестный автор";
  const authorLastName = post.author?.lastName || "";
  const postDate =
    typeof post.date === "string" ? post.date.split("T")[0] : "Дата не указана";
  const { deletePost } = usePostsStore();

  const { isAuthenticated } = useAuthStore();
  const { posts } = usePostsStore();

  const handleDeletePost = async (id) => {
    try {
      await deletePost(id);
    } catch (error) {
      console.log(error, post.author?.name);
    }
  };
  const navigate = useNavigate();
  // const handleDeletePost=()=>{

  // }
  return (
    <>
      <div className={s.PostCard}>
        <div className={s.cardTop}>
          <h2>{post.title}</h2>
         <span className={s.image}> {post.image && (
            <img
              src={`http://localhost:3030${post.image}`}
              alt="Превью поста"
            />
          )}
          </span>
          <p>{post.text}</p>
        </div>
        <div className={s.cardBottom}>
        <Button
          className={s.btn}
          onClick={() => navigate(`/posts/${post._id}`)}
        >
          Раскрыть
        </Button>
        <Button onClick={() => handleDeletePost(post._id)} className={s.btn}>
          Удалить пост
        </Button>
       
        <span>{authorName} {authorLastName}</span>
        <span className={s.date}>{postDate}</span>
      
         <LikeButton post={post} />
        </div>
      </div>
    </>
  );
};
export default PostCard;
