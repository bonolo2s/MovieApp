import { useState, useEffect } from "react";

import { FaSearch } from "react-icons/fa";
import Footer from "../src/components/Footer";


function App() {

  const [movies, setMovies] = useState([]);
  const [favMovies, setFavMovies] = useState([])
  const [searchValue,setSearchValue] = useState('')

  const getMovies = async() =>{
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=91880bd4`

    const Response = await fetch(url);
    const jsonResponse = await Response.json();

    

    if(jsonResponse){
      setMovies(jsonResponse.search)
      console.log(jsonResponse);
    }
  }

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() =>{
    getMovies();
  },[searchValue])

  console.log()

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
            <div style={{display:'flex'}}>
              <label htmlFor="">
                <input type="text"
                placeholder="search" 
                style={{padding:'10px',fontSize:'18px'}}
                value={searchValue}
                onChange={handleInputChange}/>
              </label>
              <div>
                  <FaSearch style={{backgroundColor:'pink', padding:'10px',margin:'0 5px', borderRadius:'50px'}} />
              </div>
            </div>
          </div>
        </div>

        <div className="home">
          <div>
            <h1>Trending this week !</h1>
            <div>reserved for mapping</div>
          </div>

          <div>
            <h1>Search Results for :</h1>
            <div>reserved for mapping</div>
          </div>
          
          
        </div>
        <Footer/>
      </div>
  );
}

export default App;
