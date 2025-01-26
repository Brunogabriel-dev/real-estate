import React from "react"

// import components 
import CountryDropdown from "./CountryDropdown";
import PropertyDropdown from "./PropertyDropdown";
import PriceRangeDropdown from "./PriceRangeDropdown";

// import icons
import { RiSearch2Line } from  "react-icons/ri"

const Search = () => {
  return (
    <div className="px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between">
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <button>
        <RiSearch2Line />
      </button>
    </div>
  )
};

export default Search;