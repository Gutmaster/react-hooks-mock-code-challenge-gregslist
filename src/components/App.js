import React, {useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [searchFilter, setSearchFilter] = useState('')

  return (
    <div className="app">
      <Header updateSearchFilter={setSearchFilter}/>
      <ListingsContainer searchFilter={searchFilter}/>
    </div>
  );
}

export default App;
