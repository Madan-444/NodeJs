import React, {createContext, Component } from 'react'

export const ThemeContextx = createContext();

class ThemeContext extends Component {
    state={
        isLightTheme:true,
        light: { syntax:'#555',ui:'#ddd',bg:'#eee'},
        dark:{ syntax: '#ddd',ui:'#333',bg:'555'}
    }
     handleToggle = ()=> {
         console.log('toggle happended')
        this.setState({
            isLightTheme: ! this.state.isLightTheme
        })
     }
    render() {
        return (
            <div>
                <ThemeContextx.Provider value={{...this.state,handleToggle: this.handleToggle,}}>
                    {this.props.children}
                </ThemeContextx.Provider>
                
            </div>
        )
    }
}

export default ThemeContext
