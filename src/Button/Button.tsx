import React from 'react';
import {ButtonProps} from "./Button.types";
import styled from '@emotion/styled';


const GlassButton : React.FC<ButtonProps> = ({children,...props}) => {

    return (
        <button {...props}>
            {children}
        </button>
    );
};

export const Button = styled(GlassButton)({
    backgroundColor: 'red',
    borderRadius: 20,
    color: 'white',
})