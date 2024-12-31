const CountryData = ({ country, handleVisitedCountry, handleVisitedFlag }) => {
  return (
    <div>
      <p>
        <small>
          <span style={{ fontWeight: "bold" }}>Country Data:</span>{" "}
          {country.name.common}
        </small>
      </p>
    </div>
  );
};

export default CountryData;
