const PostCard = ({ post }) => {
    // Добавляем защиту от undefined
    const authorName = post.author?.name || 'Неизвестный автор';
    const authorLastName = post.author?.lastName || '';
    const postDate = post.data ? new Date(post.data).toLocaleDateString() : 'Дата не указана';

    return (
        <div className="post-card">
            <h3>{post.title}</h3>
            <div className="author-info">
                <span>{authorName} {authorLastName}</span>
                <span>{postDate}</span>
            </div>
            <p className="post-text">{post.text}</p>

            {/*<div className="post-stats">*/}
            {/*    <div className="likes">*/}
            {/*        ❤️ {post.likes?.length || 0}*/}
            {/*    </div>*/}
            {/*    <div className="comments">*/}
            {/*        💬 {post.comments?.length || 0}*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};
export default PostCard;
