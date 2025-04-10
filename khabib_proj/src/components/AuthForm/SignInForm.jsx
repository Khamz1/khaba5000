import React from "react";
import s from "./signIn.module.css";
import {Input} from "../Ui/Input/Input";
import Button from "../Ui/Button/Button";
import {Container} from "@/components/Ui/Container/Container.jsx";

export const SignInForm = ({
                               formData, handleChange, handleSubmit, error, loading
                           }) => {
    const {name, lastName, email, password} = formData;

    return (
        <div className={s.AuthForm}>

            <form className={s.formInner} onSubmit={handleSubmit}>
<Container className={s.container}>
                <Input
                    className={s.input}
                    name='name'
                    type='text'
                    placeholder='Введите ваше имя'
                    value={name}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    />
                <Input
                    className={s.input}
                    type='text'
                    placeholder='Введите вашу фамилию'
                    value={lastName}
                    onChange={handleChange}
                    required
                    disabled={loading}/>
                <Input
                    className={s.input}
                    type='email'
                    placeholder='Введите ваш email'
                    value={email}
                    onChange={handleChange}
                    required
                    disabled={loading}/>
                <Input
                    className={s.input}
                    type='password'
                    placeholder='Придумайте пароль'
                    value={password}
                    onChange={handleChange}
                    required
                    disabled={loading}/>
                {error && <div className={s.error}>{error}</div>}
                <Button className={s.button} type='submit' disabled={loading}>
                    {loading?'Регистрация...':'Зарегистрироваться'}
                </Button>
</Container>
            </form>
        </div>
    );
};
