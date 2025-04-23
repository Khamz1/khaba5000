import React from "react";
import s from "./signIn.module.css";
import { Input } from "../Ui/Input/Input";
import Button from "../Ui/Button/Button";
import { Container } from "@/components/Ui/Container/Container.jsx";
import { useNavigate } from "react-router-dom";
import H2 from "../Ui/Headers/H2";

export const SignInForm = ({
  formData = {}, // Добавляем значение по умолчанию
  handleChange,
  handleSubmit,
  error,
  loading,
}) => {
  const { email = "", password = "" } = formData; // Значения по умолчанию
  const navigate = useNavigate();

  return (
    <div>
      <Container className={s.container}>
        <H2>
          Если вы зарегестрировались, <br /> войдите в свой аккаунт!
        </H2>
        <form onSubmit={handleSubmit}>
          <div className={s.signInForm}>
            <Input
              className={s.input}
              name="email"
              type="email"
              placeholder="Введите ваш email"
              value={email}
              onChange={handleChange}
              required
              disabled={loading}
            />
            <Input
              className={s.input}
              name="password"
              type="password"
              placeholder="Введите ваш пароль"
              value={password}
              onChange={handleChange}
              required
              disabled={loading}
            />
            {error && <div className={s.error}>{error}</div>}
            <Button className={s.button} type="submit" disabled={loading}>
              {loading ? "Вход..." : "Войти"}
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
};
