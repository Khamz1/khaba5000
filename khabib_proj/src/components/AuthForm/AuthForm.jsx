import React from "react";
import s from "./AuthForm.module.css";
import { Input } from "../Ui/Input/Input";
import Button from "../Ui/Button/Button";

export const AuthForm = () => {
  return (
    <div className={s.AuthForm}>
      <form className={s.formInner}>
        <Input placeholder="Логин" className={s.input} />
        <Input placeholder="Логин" className={s.input} />
        <Input placeholder="Логин" className={s.input} />
        <Input placeholder="Логин" className={s.input} />
        <Button className={s.button}>Зарегистрироваться</Button>
      </form>
    </div>
  );
};
