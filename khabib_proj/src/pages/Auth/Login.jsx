import { useAuthStore } from '../../store/auth.store.js';
import {useState} from "react";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, loading, error } = useAuthStore();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button disabled={loading}>
                {loading ? 'Loading...' : 'Login'}
            </button>
            {error && <div className="error">{error}</div>}
        </form>
    );
};

export  default Login
