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
  }, []);
  
  //Function to cater for users request
  const getMovies = async() => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=91880bd4`;
    const response = await fetch(url);
    const jsonResponse = await response.json();
    if (jsonResponse.Search) {
      setMovies(jsonResponse.Search);
      console.log(setMovies)
    }
  };
  


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
            <SearchInputField searchValue={searchValue} setSearchValue={setSearchValue} />
          </div>
        </div>

        <div className="home">
          <div>
            <h1>Favs of All Time!</h1>
            <div>
              <Display favMovies = {favMovies} />
            </div>
          </div>

          <div>
            <h1>Search Results for :</h1>
            <div>

            </div>
          </div>
          
        </div>
        <Footer/>
      </div>
  );
}

export default App;
