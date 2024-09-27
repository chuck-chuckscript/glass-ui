import React from 'react';
import {ButtonProps} from "./Button.types";
import style from './button.module.scss';
export const Button : React.FC<ButtonProps> = ({variant, children, className, ...props}) => {

    if(variant === 'custom'){
        return (
            <button className={className} {...props}>
                {children}
            </button>
        );
    }
    return (
        <button className={style.button} {...props}>
            {children}
        </button>
    );
};