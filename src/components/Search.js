import React, {useState} from "react";

function Search({updateSearchFilter}) {
  const [searchText, setSearchText] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  function handleSearch(text){
    setSearchText(text)
    updateSearchFilter(text)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchText}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
