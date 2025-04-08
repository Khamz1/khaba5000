import Button from "../Ui/Button/Button";
import s from "./postCard.module.css";

const PostCard = ({ post }) => {
  // Добавляем защиту от undefined
  const authorName = post.author?.name || "Неизвестный автор";
  const authorLastName = post.author?.lastName || "";
  const postDate = post.data
    ? new Date(post.data).toLocaleDateString()
    : "Дата не указана";

  return (
    <div className={s.PostCard}>
      <h3 className={s.title}>{post.title}</h3>
      <p className={s.text}>
        {post.text} Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ipsam molestiae sit dignissimos quidem illo magni quos laborum rerum
        iste soluta illum consectetur nisi exercitationem ut, odit culpa
        similique hic vitae?{" "}
      </p>

      <div className={s.info}>
        <Button className={s.btn}>Раскрыть</Button>
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
