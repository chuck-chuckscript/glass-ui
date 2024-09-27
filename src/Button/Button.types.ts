import React from "react";

type StyleVariant = 'default' | 'custom';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    variant?: StyleVariant
}

