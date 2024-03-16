import React from "react";
import Search from "./Search";

function Header({updateSearchFilter}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search updateSearchFilter={updateSearchFilter}/>
    </header>
  );
}

export default Header;
