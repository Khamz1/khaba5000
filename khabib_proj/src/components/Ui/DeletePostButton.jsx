import { useAuthStore } from '../../store/auth.store.js';
import { usePostsStore } from '../../store/posts.store.js';

const DeletePostButton = ({ postId }) => {
    const { user } = useAuthStore();
    const { deletePost, loading } = usePostsStore();

    const handleDelete = async () => {
        if (window.confirm('Вы уверены, что хотите удалить пост?')) {
            try {
                await deletePost(postId, user._id, user.role);
            } catch (error) {
                alert(error.message);
            }
        }
    };

    return (
        <button
            onClick={handleDelete}
            disabled={loading}
            className="delete-button"
        >
            {loading ? 'Удаление...' : '×'}
        </button>
    );
};

export default DeletePostButton;
