import React, {useState, useEffect, useContext } from "react";

// import icons
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'

// import headless ui
import { Menu } from "@headlessui/react";

// import house context
import { HouseContext } from "./HouseContext";

const CountryDropdown = () => {
  const {country, setCountry, countries} = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as='div' className='dropdown ralative'>
      <Menu.Button>
      <RiMapPinLine 
      className="dropdown-icon-primary"/>
      <div>
        <div>{country}</div>
        <div>Select your place</div>
      </div>
      </Menu.Button>
      </Menu>
  );
};

export default CountryDropdown;