import React from "react"

// import image 
import Image from "../assets/img/house-banner.png";

// import components
import Search from "../components/Search";

const Banner = () => {
  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-24">
      <div className="flex flex-col lg:flex-row">
        <div>
          <h1>
            <span>Rent</span>  Your Dream House With Us.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Debitis
            magnam est autem minus expedita accusantium
            quam fugit distinctio
            molestias incidunt!
          </p>
        </div>
        {/* image */}
        <div>
          <img src={Image} alt="" />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner