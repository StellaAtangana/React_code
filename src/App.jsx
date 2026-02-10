import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card.jsx'
import './App.css'

function App() {
  return <>
  
      <title>Mon Portfolio</title>
      <p> Vous découvrirez ici mes projets.</p>
      <img src="https://i.pinimg.com/736x/ba/97/24/ba9724a865589802d21f92fde3143ef4.jpg" alt="image lien externe."width="500px" />
      <button>Me contacter</button>
      <Card nom ="Alice" role="Admin" />
  </>
}

export default App
