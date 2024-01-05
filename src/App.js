import { useState, useEffect } from "react";

import Footer from "../src/components/Footer";
import Display from "./components/Display";
import SearchInputField from "./components/SearchInputField";


function App() {

  const [movies, setMovies] = useState([]);

  const [favMovies, setFavMovies] = useState([])

  const [searchValue,setSearchValue] = useState('')

  //initial render, initial render is working
  useEffect(() => {
    const fetchMovie = async () => {
      const url = "http://www.omdbapi.com/?s=fast&apikey=91880bd4";
      const response = await fetch(url);
      const jsonResponse = await response.json();
      if (jsonResponse.Search) {
        setFavMovies(jsonResponse.Search);
        console.log(favMovies);
      }
    };
  
    fetchMovie();
  }, [favMovies]);
  
  //Function to handle users request
  const getMovies = async() => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=91880bd4`;
    const response = await fetch(url);
    const jsonResponse = await response.json();

    if (jsonResponse.Search) {
      setMovies(jsonResponse.Search);
      console.log(movies)
    }
  };

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    getMovies();
  }, [searchValue]);



  return (
      <div>
        
        <div className="header">
          <div>
            <h1>MovieMatrix</h1>
            <br />
            <p>Welcome to MovieMatrix, a comprehensive platform for movie enthusiasts </p>
            <br />
            <p>Please note, MovieMatrix does not offer movie streaming.</p>
            <br />
            <p>Enjoy exploring the world of cinema with us! 😊</p>
            <br />
            <SearchInputField searchValue={searchValue} setSearchValue={setSearchValue} handleInputChange = {handleInputChange} />
          </div>
        </div>

        <div className="home">
          <div>
            <h1>Favs of All Time!</h1>
            <div className="moviesDisplay-container">
              <Display movies = {favMovies} />
            </div>
          </div>

          <div>
            <h1>Search Results for :{searchValue}</h1>
            <div className="moviesDisplay-container" >
              {searchValue && <Display movies = {movies} />}
            </div>
          </div>
        </div>

        <Footer/>

      </div>
  );
}

export default App;
