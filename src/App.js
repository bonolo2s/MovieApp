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
      const url = "https://www.omdbapi.com/?s=fast&apikey=91880bd4";
      const response = await fetch(url);
      const jsonResponse = await response.json();
      if (jsonResponse.Search) {
        setFavMovies(jsonResponse.Search);
        //console.log(favMovies);
      }
    };
  
    fetchMovie();
  }, [favMovies]);
  
  //get movies block
  const getMovies = async() => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=91880bd4`;
    const response = await fetch(url);
    const jsonResponse = await response.json();

    if (jsonResponse.Search) {
      setMovies(jsonResponse.Search);
    }
  };

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  //Function to handle users request
  const handleUserSearch = (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page
    getMovies();
  };

  //useEffect(() => {
   // getMovies(searchValue);
  //}, [getMovies, searchValue]);



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
            <SearchInputField searchValue={searchValue} handleUserSearch={handleUserSearch} handleInputChange = {handleInputChange} />
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
