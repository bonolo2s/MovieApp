import { FaSearch } from "react-icons/fa";

const SearchInputField = (props) => {


    return ( 
        <div>
            <div style={{display:'flex'}}>
                <form onSubmit={props.handleUserSearch} style={{display:'flex', alignItems:'center'}}>
                    <label style={{display:'inline'}} >
                        <input 
                            type="text"
                            placeholder="Type for a search" 
                            style={{padding:'10px',fontSize:'18px'}}
                            value={props.searchValue}
                            onChange={props.handleInputChange}
                        />
                    </label>
                    <FaSearch className="searchBtn" onClick={props.handleUserSearch}/>
                </form>
            </div>
        </div>
     );
}
 
export default SearchInputField;