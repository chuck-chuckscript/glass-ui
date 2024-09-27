import React from 'react';
import {ButtonGlass} from "./Button.types";
import style from './button.module.scss';
export const Button = ({variant, children, className, ...props} : ButtonGlass) => {
    return (
        <button className={style.button} {...props}>
            {children}
        </button>
    );
};