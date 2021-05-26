export const selectRestaurantWithPizza = (reduxState) => {
  const restaurantWithPizzaNames = [
    ...reduxState.restaurants.allRestaurants,
  ].map((currentRes) => {
    return {
      ...currentRes,
      pizzas: currentRes.pizzas.map((pizzaId) => {
        return reduxState.pizzas.allPizzas.find(
          (pizza) => pizza.id === pizzaId
        );
      }),
    };
  });

  return restaurantWithPizzaNames.sort((a, b) => a.name.localeCompare(b.name));
};

export const selectPizzasSoldByRestaurant = (restaurantId) => (reduxState) => {
  // your logic goes here - it will be slightly more complex than the previous exercise
  const restaurant = [...reduxState.restaurants.allRestaurants].find(
    (currentRes) => {
      return currentRes.id === restaurantId;
    }
  );
  const pizzasSoldByRestaurant = restaurant.pizzas.map((pizzaId) => {
    return reduxState.pizzas.allPizzas.find((pizza) => pizza.id === pizzaId);
  });
  return pizzasSoldByRestaurant;
};
