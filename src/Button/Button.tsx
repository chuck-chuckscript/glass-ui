import React from 'react';
import {ButtonProps} from "./Button.types";
import styled from '@emotion/styled';


const GlassButton : React.FC<ButtonProps> = ({children, className, ...props}) => {

    return (
        <button {...props}>
            {children}
        </button>
    );
};

export const Button = styled(GlassButton)(
    {
        color: 'red',
        borderRadius: 20
    }
)