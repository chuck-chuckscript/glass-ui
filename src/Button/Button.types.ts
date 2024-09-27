import React from "react";

type StyleVariant = '';

interface ButtonProps{
    variant: StyleVariant
}

export type ButtonGlass = ButtonProps & React.HTMLAttributes<HTMLButtonElement>;