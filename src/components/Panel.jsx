import React from "react";
import { createContext, useContext } from 'react'

const ThemeContext = createContext(null)

function Panel (title, children){
    const theme = useContext(ThemeContext)
    const className = 'panel-' + theme;

    return (
        <section className={className}>
          <h1>{title}</h1>
          {children}
        </section>
    )
}

export default Panel