import React, { useState } from 'react';
import { SignUpForm } from "../../components/AuthForm/signUpForm";
import { useAuthStore } from "../../store/auth.store";
import { useNavigate } from "react-router-dom";

function SignUp() {
    const [formData, setFormData] = useState({
        name: "",
        lastName: "",
        email: "",
        password: ""
    });

    const { register, loading } = useAuthStore();
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        
        try {
            await register({
                name: formData.name,
                lastName: formData.lastName,
                email: formData.email,
                password: formData.password
            });
            navigate("/posts"); // Перенаправление после успешной регистрации
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="auth-page">
            <SignUpForm 
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                isLoading={loading}
                error={error}
            />
        </div>
    );
}

export default SignUp;
