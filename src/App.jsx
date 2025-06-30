import  { useEffect, useState } from 'react'

import Search from './components/Search';


//Base part of the API URL 
const API_BASE_URL = 'https://api.themoviedb.org/3'


//Importing the API KEY

 const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

console.log('Current API key:', API_KEY);



//API 
const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept : 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}



const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const [errorMessage, setErrorMessage] = useState('')


  // FETCHING THE MOVIES 
  const fetchMovies = async ()=> {
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.asc`
      console.log(endpoint);
      

      const response = await fetch(endpoint, API_OPTIONS)
      
      //parse the response
      if(!response.ok) {
        throw new Error('Failed to fetch movies')
      }
      const data = await response.json();

      console.log(data)




    } catch (error) {
      console.log(`Wala ka fetch ug movies: ${error}`)
    }
  }
//END OF FETCHING 

  useEffect(()=>{
    fetchMovies();
  },[])


  return (
    <main >
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="/pics/hero.png" alt="Hero Banner" />
          <h1>Find <span className="text-gradient">Movies </span>You'll Enjoy  </h1>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        </header>
        
        <section className='all-movies'>
          <h2>ALL MOVIES</h2>


        </section>

        <h1 className="text-white">{searchTerm}</h1>


      </div>
      
    
      
    </main>
  )
}

export default App
