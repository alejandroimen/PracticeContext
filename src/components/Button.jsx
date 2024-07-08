import React from "react";
import { createContext, useContext } from 'react'

const ThemeContext = createContext(null)

function Button(children){
    const theme = useContext(ThemeContext);
    const className = 'button-' + theme;

    return (
      <button className={className}>
        {children}
      </button>
    );
}

export default Button;