import React from "react";
import Button from "../../Ui/Button/Button.jsx";
import { LogoIcon } from "../../../assets/index.js";
import Select from "../../Ui/Select/Select.jsx";
import { Container } from "../../Ui/Container/Container.jsx";
import HStyle from "./header.module.css";
import {useNavigate} from "react-router-dom";
import {Paths} from '@/constants/routesPaths.js'

function Header() {

  const navigate = useNavigate();

  return (
    <header className={HStyle.header}>
      <Container className={HStyle.main}>
        <Button onClick={() => navigate(`${Paths.CreatePost}`) }>Создать новый пост</Button>
        <LogoIcon fill="red" />
        <Button>Выйти из аккаунта</Button>
      </Container>
    </header>
  );
}

export default Header;
