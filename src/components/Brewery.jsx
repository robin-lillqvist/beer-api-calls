import BasicCard from "./Card";

const Brewery = (breweryData) => {
  const sortedBreweryData = breweryData.data
    .sort(function (a, b) {
      return a.brewery_type.localeCompare(b.brewery_type) || b.name - a.name;
    })
    .map((brewery, index) => {
      return <BasicCard data={brewery} key={index} />;
    });

  return (
    <div className="brewery-list" key="BreweryResults">
      {sortedBreweryData}
    </div>
  );
};

export default Brewery;
