import { usePostsStore } from '../../store/posts.store';
import { useAuthStore } from '../../store/auth.store';
import {useState} from "react";

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const { createPost } = usePostsStore();
    const { user } = useAuthStore();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user) return;

        try {
            await createPost({ title, text });
            setTitle('');
            setText('');
        } catch (error) {
            alert(error.response?.data?.error || 'Ошибка при создании поста');
        }
    };

    return (
        <div className="create-post">
            <h2>Новый пост</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Заголовок"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Текст поста"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    required
                />
                <button type="submit">Опубликовать</button>
            </form>
        </div>
    );
};

export default CreatePost;
