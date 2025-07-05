import  { useEffect, useState } from 'react'

import Search from './components/Search';
import Spinner from './components/spinner';
import MovieCard from './components/MovieCard';
import { useDebounce } from 'react-use';



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
  const [movieList, setmMovieList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  //Debounce -> for optimization  
  const [debouncedSearchTerm, setDebouncedSearchTerm]= useState('')
  
  // Debounce the search term to prevent making too many API requests
  // by waiting for the user to stop typing for 500ms
  useDebounce(()=>setDebouncedSearchTerm(searchTerm), 500, [searchTerm])



  // FETCHING THE MOVIES 
  const fetchMovies = async (query = '')=> {
    //FOR LOADING 
    setIsLoading(true);
    setErrorMessage('')

    try {
      const endpoint = query 
      ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
      :`${API_BASE_URL}/discover/movie?sort_by=popularity.asc`
      console.log(endpoint);
      

      const response = await fetch(endpoint, API_OPTIONS)
      
      //parse the response
      if(!response.ok) {
        throw new Error('Failed to fetch movies')
      }
      const data = await response.json();

      console.log(data)
      
      // FOR SETTING THE API RESULTS (JSON)
      if(data.response === 'False') {
        setErrorMessage(data.error || 'DILI MAO ');
        setmMovieList([]);
        return
      }
      // END 

        setmMovieList(data.results || []);
    } catch (error) {
      console.log(`Wala ka fetch ug movies: ${error}`)
    } // finally clause or no matter what happens 
    finally {
      setIsLoading(false)
    } 
  }
//END OF FETCHING 

  useEffect(()=>{
    fetchMovies(debouncedSearchTerm);
  },[debouncedSearchTerm])


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
          <h2 className='mt-[40px]'>ALL MOVIES</h2>

        {/* CONDITIONAL RENDERING */}
        {isLoading ? (
          <Spinner/>
        ) : errorMessage ? (
          <p className='text-red-500'>{error}</p>
        ) :(
          <ul>
            {movieList.map((movie)=>(
              <MovieCard key={movie.id} movie={movie}/>
            ))}
          </ul>
        )}
        </section>

        <h1 className="text-white">{searchTerm}</h1>


      </div>
      
    
      
    </main>
  )
}

export default App
