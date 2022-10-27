import BasicCard from "./Card";

const Brewery = (breweryData) => {
  const newSort = breweryData.data
    .sort(function (a, b) {
      return a.brewery_type.localeCompare(b.brewery_type) || b.name - a.name;
    })
    .map((brewery, index) => {
      return <BasicCard data={brewery} key={index} />;
    });

  console.log(newSort);

  return (
    <div className="brewery-list" key="BreweryResults">
      {newSort}
    </div>
  );
};

export default Brewery;
