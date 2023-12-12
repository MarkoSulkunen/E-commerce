import React, { useState } from "react";
import { searchSymbol } from "../../assets/symbols/common";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");

/*###############################################################################

 FUNCTION NAME: handleSearch

 DESCRIPTION: Sends search query and location to parent component.

################################################################################*/
  const handleSearch = () => {
    console.log("search:", searchQuery, "location:", locationQuery);
    onSearch(searchQuery, locationQuery);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter the location"
        value={locationQuery}
        onChange={(e) => setLocationQuery(e.target.value)}
      />
      <input
        type="text"
        placeholder="Choose a service"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>{searchSymbol}</button>
    </div>
  );
};

export default SearchBar;
