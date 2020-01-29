import React, { Component } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import MyCum from './components/MyCum'
import ThemeContext from './components/context/ThemeContext'

export class App extends Component {
  render() {
    return (
      <div className='App'>
        <ThemeContext >
        <Navbar />
        <MyCum />
        </ThemeContext>
        
      </div>
    )
  }
}

export default App
