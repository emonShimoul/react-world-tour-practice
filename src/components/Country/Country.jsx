import { useState } from "react";
import "./Country.css";
import CountryDetail from "../CountryDetail/CountryDetail";

const Country = ({ country, handleVisitedCountry, handleVisitedFlag }) => {
  //   console.log(country);

  const { name, flags, population, area, cca3 } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className={`country ${visited && "visited"}`}>
      <h3 style={{ color: visited ? "purple" : "black" }}>{name?.common}</h3>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>
        <small>Code: {cca3}</small>
      </p>
      <button onClick={() => handleVisitedCountry(country)}>
        Mark Visited
      </button>
      <button onClick={() => handleVisitedFlag(country.flags.png)}>
        Add Flag
      </button>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Interested"}
      </button>
      <div>
        {visited
          ? "I have visited this country..."
          : "I want to visit this country!!"}
        <hr />
        <CountryDetail
          country={country}
          handleVisitedCountry={handleVisitedCountry}
          handleVisitedFlag={handleVisitedFlag}
        ></CountryDetail>
      </div>
    </div>
  );
};

export default Country;
