import { FaSearch } from "react-icons/fa";

const SearchInputField = (props) => {


    return ( 
        <div>
            <div style={{display:'flex'}}>
                <label>
                    <input 
                        type="text"
                        placeholder="Type for a search" 
                        style={{padding:'10px',fontSize:'18px'}}
                        value={props.searchValue}
                        onChange={props.handleInputChange}
                    />
                </label>
                <div>
                    <FaSearch style={{backgroundColor:'pink', padding:'10px',margin:'0 5px', borderRadius:'50px'}}/>
                </div>
            </div>
        </div>
     );
}
 
export default SearchInputField;