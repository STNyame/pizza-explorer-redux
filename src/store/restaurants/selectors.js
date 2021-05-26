export const selectRestaurant = (reduxState) => {
  const sortedRestaurants = [...reduxState.restaurants.allRestaurants].sort(
    (a, b) => a.name.localeCompare(b.name)
  );
  return sortedRestaurants;
};

export const selectRestaurantsThatSellPizza = (pizzaId) => (reduxState) => {
  // your logic goes here
  const restaurantThatSellsPizza = [
    ...reduxState.restaurants.allRestaurants,
  ].filter((restaurant) => {
    return restaurant.pizzas.includes(pizzaId);
  });
  return restaurantThatSellsPizza;
};
