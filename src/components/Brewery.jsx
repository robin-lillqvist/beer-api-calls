import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import BasicCard from "./Card";

const Brewery = (breweryData) => {
  const results = breweryData.data.map((brewery, index) => {
    return (
      <Box sx={{ mt: 3 }}>
        <BasicCard data={brewery} key={index} />
      </Box>
    );
  });

  return <div key="BreweryResults">{results}</div>;
};

export default Brewery;
