import React from 'react';
import HStyle from './header.module.css'
import Button from "../../Ui/Button/Button.jsx";
import {LogoIcon} from "../../../assets/index.js";
import Select from "../../Ui/Select/Select.jsx";

function Header() {
    return (
        <div>
        <div className={HStyle.main}>
            <Button>Создать новый пост</Button>
            <LogoIcon fill='red' />
           <Select/>
        </div>
        </div>
    );
}

export default Header;
