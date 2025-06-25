import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const Card = ({title}) => {

const [hasLiked, setHasLiked] = useState(false);  
  return (
    <div className="card" >
      <h2>{title}</h2>  
      <button onClick={() => setHasLiked(!hasLiked) 
      }>
        {hasLiked ? 'Liked' : 'Like'}
      </button>
    </div>
  )
}

useEffect(()=>{
  // The code that we want to run 

  //Optional return function

}, [])  //The dependency array

const App = () => {
  const [hasLiked, setHasLiked] = useState(false);

  return (
    <div className='card-container'>
      
      <Card title="ONE" rating={true} isCool = {true}/>
      <Card title="TWO"/>
      <Card title="THREE"/>
      
      
      
    </div>
    
  )
}

export default App
