import React from "react";
import Button from "../../Ui/Button/Button.jsx";
import { LogoIcon } from "../../../assets/index.js";
import Select from "../../Ui/Select/Select.jsx";
import { Container } from "../../Ui/Container/Container.jsx";
import HStyle from "./header.module.css";
import { useNavigate } from "react-router-dom";
import { Paths } from '@/constants/routesPaths.js'
import { useAuthStore } from "../../../store/auth.store.js";

function Header() {

  const navigate = useNavigate();
  const { logout, isAuthenticated } = useAuthStore()
  const handleLogout = () => {
    logout()
    navigate('/signIn')
  } 

  return (
    <header className={HStyle.header}>
      <Container className={HStyle.main}>
       {isAuthenticated?<Button onClick={() => navigate(`${Paths.CreatePost}`)}>Создать новый пост</Button>:null}
       <button onClick={()=>navigate('/posts')} className={HStyle.deleteButton}><LogoIcon fill="red" /></button>
        
        <div className={HStyle.hButtons}>
        {isAuthenticated ? <Button onClick={handleLogout}>Выйти из аккаунта</Button> : <Button onClick={() => navigate('signIn')}>Войти в аккаунт</Button>}
        {isAuthenticated ? null : <Button onClick={() => navigate('signUp')}>Регистрация</Button>}
        </div>
      </Container>
    </header>
  );
}

export default Header;
