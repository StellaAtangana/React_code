import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card.jsx'
import TeamMember from './components/TeamMember.jsx'
import './App.css'

function App() {
  return <>
  
      <title>Mon Portfolio</title>
      <p> Vous découvrirez ici mes projets.</p>
      <img src="https://i.pinimg.com/736x/ba/97/24/ba9724a865589802d21f92fde3143ef4.jpg" alt="image lien externe."width="500px" />
      <button>Me contacter</button>
      <Card nom ="Alice" role="Admin" />
      <TeamMember nom="Catherine" metier="Professeur" photo ="https://i.pinimg.com/736x/f9/8d/b0/f98db0c2c598fd0011d109db717af8e2.jpg" alt="photo" width="300px" />
  </>
}

export default App
