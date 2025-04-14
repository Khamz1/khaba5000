import React, { useState } from 'react';
import { SignInForm } from "@/components/AuthForm/SignInForm.jsx";
import { useAuthStore } from "@/store/auth.store.js";
import { useNavigate } from "react-router-dom";

function SignIn() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const { login, loading } = useAuthStore(); // Используем login вместо register
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
            await login(formData.email, formData.password);
            navigate("/posts"); // Перенаправляем на главную после входа
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <SignInForm 
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            error={error}
            loading={loading}
        />
    );
}

export default SignIn;