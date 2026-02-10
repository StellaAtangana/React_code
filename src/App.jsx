import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card.jsx'
import TeamMember from './components/TeamMember.jsx'
import './App.css'

function App() {
  const [ score, setScore ] = useState(0) ;
  const scoreplus = () => {
    setScore(score+ 1);
    console.log(score+1);
    
}
  
  
  return  <>
      <title className='title'> Mon Portfolio</title>
      <div className='head'>
        <img src="https://i.pinimg.com/736x/ba/97/24/ba9724a865589802d21f92fde3143ef4.jpg" alt="image lien externe."width="50px" />
        <p> Vous découvrirez ici mes projects.</p>
        <button onClick={scoreplus}>Clique-moi</button>
        <p>score:{score}</p>
      </div>
      <button>Me contacter</button>
      <div className='TeamMember'>
      <TeamMember photo ="https://i.pinimg.com/736x/f9/8d/b0/f98db0c2c598fd0011d109db717af8e2.jpg" alt="photo" nom="Catherine"  metier="Professeur"/>
      </div>
  </>
  }
export default App
