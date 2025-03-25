import React from 'react';
import SButton from './button.module.css'

function Button({children}) {
    return (

        <button className={SButton.button}>{children}</button>
    );
}

export default Button;
