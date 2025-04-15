import { useNavigate } from "react-router-dom";
import Button from "../Ui/Button/Button";
import s from "./postCard.module.css";

const PostCard = ({ post }) => {
  // Добавляем защиту от undefined
  const authorName = post.author?.name || "Неизвестный автор";
  const authorLastName = post.author?.lastName || "";
  const postDate = post.date.split('T')[0] || "Дата не указана";
  const navigate = useNavigate();
  return (
    <div className={s.PostCard}>
      <h3 className={s.title}>{post.title}</h3>
      <p className={s.text}>
        {post.text} {" "}
      </p>

      <div className={s.info}>
      <Button 
        className={s.btn}
        onClick={() => navigate(`/posts/${post._id}`)}
      >
        Раскрыть
      </Button>
        <div className={s.right}>
          <span className={s.name}>
            {authorName} {authorLastName}
          </span>
          <span className={s.date}>{postDate}</span>
        </div>
      </div>

      {/* <div className="post-stats">*/}
      {/*    <div className="likes">*/}
      {/*        ❤️ {post.likes?.length || 0}*/}
      {/*    </div>*/}
      {/*    <div className="comments">*/}
      {/*        💬 {post.comments?.length || 0}*/}
      {/*    </div>*/}
      {/*</div> */}
    </div>
  );
};
export default PostCard;
