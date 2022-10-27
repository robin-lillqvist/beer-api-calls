import BasicCard from "./Card";

const Brewery = (breweryData) => {
  const myData = []
    .concat(breweryData.data)
    .sort((a, b) => a.name > b.name ? 1 : -1)
    .map((brewery, index) => {
      return <BasicCard data={brewery} key={index} />;
    });

  return (
    <div className="brewery-list" key="BreweryResults">
      {myData}
    </div>
  );
};

export default Brewery;
