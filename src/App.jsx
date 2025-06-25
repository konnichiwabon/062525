import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const Card = ({title}) => {
  const [hasLiked, setHasLiked] = useState(false); 
  const [count, setCount ] = useState(0); 

useEffect(() => {
  console.log(`${title} has been liked: ${hasLiked}`);
  
}, [hasLiked]);





 
  return (
    <div className="card"  onClick={() => setCount(count + 1)}>
      <h2>{title} <br />{count || null}</h2>  
      <button onClick={() => setHasLiked(!hasLiked) 
      }>
        
        {hasLiked ? 'Increment' : 'Decrement'}
      </button>

      <button onClick ={() => setCount(count-1)}>
        <h2>{count || null}</h2>
        
      </button>
      </div>


      




  )

}



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
