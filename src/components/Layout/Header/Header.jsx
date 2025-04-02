import React from "react";
import Button from "../../Ui/Button/Button.jsx";
import { LogoIcon } from "../../../assets/index.js";
import Select from "../../Ui/Select/Select.jsx";
import { Container } from "../../Ui/Container/Container.jsx";
import HStyle from "./header.module.css";

function Header() {
  return (
    <header className={HStyle.header}>
      <Container className={HStyle.main}>
        <Button>Создать новый пост</Button>
        <LogoIcon fill="red" />
        <Button>Выйти из аккаунта</Button>
      </Container>
    </header>
  );
}

export default Header;
