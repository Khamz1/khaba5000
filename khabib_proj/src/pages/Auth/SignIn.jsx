import React, {useState} from 'react';
import {SignInForm} from "@/components/AuthForm/SignInForm.jsx";
import {useAuthStore} from "@/store/auth.store.js";
import {useNavigate} from "react-router-dom";

function SignIn() {
    // const [name, setName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const [formData, setFormData] = useState({
        name: "",
        lastName: "",
        email: "",
        password: ""

    })
    const {register, loading} = useAuthStore();
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        try{
            await register({
                name:formData.name,
                lastName:formData.lastName,
                email:formData.email,
                password:formData.password
            })
            navigate("/login")
        }
        catch (error) {
            setError(error.message);
        }

    }
    return (
        <>
            <SignInForm formData={formData}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        error={error}
                        loading={loading}/>

        </>
    );
}

export default SignIn;
