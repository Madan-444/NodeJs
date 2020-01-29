import React, { Component } from 'react'
import {ThemeContextx} from './context/ThemeContext'

export class MyCum extends Component {
    static contextType = ThemeContextx


    render() {
        console.log(this.context)
        const {isLightTheme,light,dark,handleToggle} = this.context
        const theme = isLightTheme ? dark:light
        return (
            <div style={{background: theme.bg,color:theme.syntax}}>
                <ul> 
                    <li style={{background:theme.ui}}> The way of the Kings </li>
                    <li style={{background:theme.ui}}> The Name of the Wind </li>
                    <li style={{background:theme.ui}}> The final Empire </li>
                </ul>
                <button onClick={handleToggle}> Toggle </button>
    
            </div>
        )
    }
}

export default MyCum
