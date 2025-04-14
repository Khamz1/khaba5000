import { usePostsStore } from '../../store/posts.store';
import { useAuthStore } from '../../store/auth.store';
import { useState } from "react";
import S from "./createPost.module.css"
import { Container } from '../Ui/Container/Container';
import Button from '../Ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from '../../helpers/jwtDecoder';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const { createPost, loading } = usePostsStore();
    const { user } = useAuthStore();
    const validatePost = (title, text) => {
        if (title.length < 0) return "Пост без заголовка?"
        if (text.length < 0) return "Текст без заголовка?"
    }
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false)
    const decodedJwt = jwtDecode(localStorage.getItem("token"))


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user) return;
        const validationError = validatePost(title, text)
        if (validationError) {
            alert(validationError)
            return;
        }

        try {
            await createPost({ title, text, userId: decodedJwt.userId });
            navigate('/posts')
            setTitle('');
            setText('');
            alert('Пост успешно создан)')

        } catch (error) {
            alert(error.response?.data?.error || 'Ошибка при создании поста');
        }
        finally {
            setIsSubmitting(false)
        }
    };

    return (

        <Container className={S.containerCenter}>


            <div className={S.createPost}>
                <h2>О чем будет ваш новый пост?</h2>
                <form className={S.createForm} onSubmit={handleSubmit}>
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
                    <Button type="submit">
                        Опубликовать
                    </Button>
                </form>
            </div>
        </Container>
    );
};

export default CreatePost;
