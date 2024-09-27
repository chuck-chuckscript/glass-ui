import React from 'react';
import {ButtonGlass} from "./Button.types";

export const Button = ({variant, children, className, ...props} : ButtonGlass) => {
    return (
        <button className={className} {...props}>
            {children}
        </button>
    );
};