import React, { useState } from 'react'

import Search from './components/Search';

    
const App = () => {
  const [searchTerm, setSearchTerm] = useState("I am Batman");

  return (
    <main >
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="/pics/hero.png" alt="Hero Banner" />
          <h1>Find <span className="text-gradient">Movies </span>You'll Enjoy  </h1>
        </header>
        
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>


      </div>
      
    
      
    </main>
  )
}

export default App
