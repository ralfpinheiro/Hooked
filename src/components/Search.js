import React, {useState} from "react";

const Search = (props) => {
    const [searchValue, setSearchValue] = useState("");

    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
    }

    const resetInputField = () => {
        setSearchValue("")
    }

    const callSearchFunction = (e) => {
        e.preventDefault();
        props.search(searchValue);
        resetInputField();
    }

    return (
        <div className="search-wrap">
            <form className="search">
                <input className="search-field" value={searchValue} onChange={handleSearchInputChanges} type="text"/>
                <input className="seatch-button" onClick={callSearchFunction} type="submit" value="Search"/>
            </form>
            <p className="App-intro">Sharing a few of our favourite movies</p>
        </div>
    );
}

export default Search;