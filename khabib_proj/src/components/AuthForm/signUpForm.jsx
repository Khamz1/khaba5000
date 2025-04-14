import React from "react";
import s from './signUp.module.css'
import { Input } from "../Ui/../../components/Ui/Input/Input";
import Button from "../../components/Ui/Button/Button";
import {Container} from '../Ui/Container/Container'
import H2 from "../Ui/Headers/H2";
export const SignUpForm = ({
    formData, 
    handleChange, 
    handleSubmit,
    loading,
    error
    
}) => {
    const { name, lastName, email, password } = formData;

    return (
        <div>
            
            <Container className={s.container}>
            <H2>Вы еще не зарегестрированы? <br/> 
            Присоеденяйтесь к нашему новостному <br/>сообществу!</H2>
            <form onSubmit={handleSubmit}>
                <div className={s.signUpForm}>
                    
                <Input
                    name="name"
                    type="text"
                    placeholder="Введите ваше имя"
                    value={name}
                    onChange={handleChange}
                    required
                    disabled={loading}
                />
                <Input
                    name="lastName"
                    type="text"
                    placeholder="Введите вашу фамилию"
                    value={lastName}
                    onChange={handleChange}
                    required
                    disabled={loading}
                />
                <Input
                    name="email"
                    type="email"
                    placeholder="Введите ваш email"
                    value={email}
                    onChange={handleChange}
                    required
                    disabled={loading}
                />
                <Input
                    name="password"
                    type="password"
                    placeholder="Придумайте пароль"
                    value={password}
                    onChange={handleChange}
                    required
                    disabled={loading}
                />
                
                {error && <div>{error}</div>}
                
                <Button 
                    type="submit" 
                    disabled={loading}
                >
                    {loading ? 'Регистрация...' : 'Зарегистрироваться'}
                </Button>
                </div>
            </form>
            </Container>
        </div>
    );
};