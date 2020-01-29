import React, { Component } from 'react'
import  {ThemeContextx} from './context/ThemeContext'

class Navbar extends Component {
    static contextType = ThemeContextx
    render() {
        console.log(this.context)
        const {isLightTheme,light,dark} = this.context
        const theme = isLightTheme ? dark : light 
        return (
            <nav style={{background: theme.ui,color:theme.syntax}}>
                <h1> Context Api</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        )
    }
}

export default Navbar
