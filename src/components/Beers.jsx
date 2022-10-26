import { FetchData }  from "./Fetch";
import { useState } from "react";
import Brewery from "./Brewery";

const Beers = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)

  const url = "https://api.openbrewerydb.org/breweries?by_city=san_francisco";
  FetchData(url, setData, setLoading, setError);
  return (
    <div>
      {data && (
      <div>
        <p>List of Breweries</p>
        <Brewery data={data} />
      </div>

      )}
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
    </div>
  );
};

export default Beers;
