import Box from "@mui/material/Box";
import BasicCard from "./Card";

const Brewery = (breweryData) => {
  const results = breweryData.data.map((brewery, index) => {
    return (
        <BasicCard data={brewery} key={index} />
    );
  });

  return <div className="brewery-list" key="BreweryResults">{results}</div>;
};

export default Brewery;
