import React, {useState, useEffect, useContext } from "react";

// import icons
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'

// import headless ui
import { Menu } from "@headlessui/react";

// import house context
import { HouseContext } from "./HouseContext";

const CountryDropdown = () => {
  const {country, setCountry, countries} = useContext(HouseContext);
  return (
    <div>CountryDropdown</div>
  );
};

export default CountryDropdown;