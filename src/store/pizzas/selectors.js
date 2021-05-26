export const selectAllPizzas = (reduxState) => {
  const sortedPizzas = [...reduxState.pizzas.allPizzas].sort(
    (a, b) => b.bought - a.bought
  );
  return sortedPizzas;
};
