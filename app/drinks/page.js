import React from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const fetchDrink = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await fetch(url);
  // throw error
  if (!response.ok) {
    throw new Error("Failed to fetch drinks");
  }
  const data = await response.json(response);
  return data;
};

const DrinkPage = async () => {
  const data = await fetchDrink();
  console.log(data);
  return (
    <div>
      <h1 className="text-7xl">DrinkPage</h1>
    </div>
  );
};

export default DrinkPage;
